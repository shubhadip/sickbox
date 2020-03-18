import * as React from 'react';
import * as ReactDOMServer from 'react-dom/server';
import { Provider } from 'react-redux';
// import { createStore } from "redux";
import { renderRoutes } from 'react-router-config';
import Loadable from 'react-loadable';
import { getBundles } from 'react-loadable/webpack';
import Routes from '../routerLinks';
import express from 'express';
import { StaticRouter, matchPath } from 'react-router-dom';
import { createStore } from 'redux';
import rootReducer from '../reducers';
import { filterData } from './utils';
// import { serialize } from 'serialize-javascript';
const app = express();
const data = require('../../build/stats.json');
const stats = require('../../build/react-loadable.json');
const PORT = process.env.PORT || 3000;

app.use(express.static('build'));

app.get('*', (req, res) => {
  const mainFiles = data['assetsByChunkName']['main'];
  const vendorfiles = data['assetsByChunkName']['vendor'];
  const context = {};
  const modules: any = [];
  let preloadedState = {};
  let promise;
  const currentRoute = Routes.find(route => matchPath(req.url, route)) || {};
  if (currentRoute['loadData']) {
    promise = currentRoute['loadData']();
  } else {
    promise = Promise.resolve({});
  }
  promise.then((response: any) => {
    const cleanedData = filterData(req.path, response.data) || {};
    preloadedState = { ...preloadedState, ...cleanedData };
    const store = createStore(rootReducer, preloadedState);

    const content = ReactDOMServer.renderToString(
      <Loadable.Capture report={moduleName => modules.push(moduleName)}>
        <Provider store={store}>
          <StaticRouter location={req.path} context={context}>
            <div>{renderRoutes(Routes)}</div>
          </StaticRouter>
        </Provider>
      </Loadable.Capture>
    );

    const finalState = store.getState();
    const bundles = getBundles(stats, modules);
    const cssStyles = bundles.filter(bundle => bundle.file.endsWith('.css'));
    const jsBudles = bundles.filter(bundle => bundle.file.endsWith('.js'));
    promise = null;

    return res.send(`
      <!DOCTYPE html>
      <html>
        <head>
          <title>SSR with RR</title>
          <link href="/${mainFiles[0]}" rel="stylesheet"/>
          ${cssStyles
            .map(style => {
              return `<link href="/${style.file}" rel="stylesheet"/>`;
            })
            .join('\n')}
        </head>
        <body>
          <div id="app">${content}</div>

<script>
window.__PRELOADED_STATE__ = ${(JSON.stringify(finalState) as any).replace(
      /</g,
      '\\u003c'
    )}
</script>
          <script type="text/javascript" src="${
            vendorfiles[0]
          }" async ></script>
          ${jsBudles
            .map(bundle => {
              return `<script type="text/javascript" src="${bundle.file}"  defer></script>`;
            })
            .join('\\n')}
          <script type="text/javascript" src="${mainFiles[1]}"  defer></script>
        </body>
      </html>
    `);
  });
});

Loadable.preloadAll().then(() => {
  app.listen(PORT, () =>
    console.log(`Frontend service listening on port: ${PORT}`)
  );
});
