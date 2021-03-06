import * as React from 'react';
import * as ReactDOMServer from 'react-dom/server';
import compression from 'compression';
import { Provider } from 'react-redux';
import Loadable from 'react-loadable';
import { getBundles } from 'react-loadable/webpack';
import Routes from '../router/routerLinks';
import { Helmet } from 'react-helmet';
import express from 'express';
import { StaticRouter, matchPath } from 'react-router-dom';
import { createStore } from 'redux';
import rootReducer from '../reducers';
import { filterData } from '../utils/filters';
import RouteMap from './../router/index';
const mobileDetect = require('mobile-detect');
const app = express();
const data = require('../../build/stats.json');
const stats = require('../../build/react-loadable.json');
const PORT = process.env.PORT || 4000;

// tbd: need to move this to nginx level
// app.get('*.js', (req, res, next) => {
//   req.url = req.url + '.gz';
//   res.set('Content-Encoding', 'gzip');
//   res.set('Content-Type', 'text/javascript');
//   next();
// });

app.use(compression());
app.use(express.static('build'));

// temp favicon fix
app.get('/favicon.ico', (req, res) => res.status(204));

app.get('*', (req, res, next) => {
  const md = new mobileDetect(req.headers['user-agent']);
  const mainFiles = data['assetsByChunkName']['main'];
  const vendorfiles = data['assetsByChunkName']['vendor'];
  const context = {};
  const modules: any = [];

  let preloadedState = {
    common: {
      isMobile: md.mobile() ? true : false,
      isBot: md.is('bot')
    }
  };
  let promise;
  const currentRoute = Routes.find(route => matchPath(req.url, route)) || {
    routeName: 'pagenotfound'
  };
  try {
    promise = currentRoute['loadData']
      ? currentRoute['loadData'](req.url)
      : Promise.resolve({});

    promise
      .then((response: any) => {
        const cleanedData = filterData(currentRoute.routeName, response) || {};
        preloadedState = { ...preloadedState, ...cleanedData };
        const store = createStore(rootReducer, preloadedState);

        const content = ReactDOMServer.renderToString(
          <Loadable.Capture report={moduleName => modules.push(moduleName)}>
            <Provider store={store}>
              <StaticRouter location={req.path} context={context}>
                <div>
                  <RouteMap />
                </div>
              </StaticRouter>
            </Provider>
          </Loadable.Capture>
        );
        const helmet = Helmet.renderStatic();
        const finalState = store.getState();
        const bundles = getBundles(stats, modules);
        const cssStyles = bundles.filter(bundle =>
          bundle.file.endsWith('.css')
        );
        const jsBudles = bundles.filter(bundle => bundle.file.endsWith('.js'));

        promise = null;
        return res.send(`
      <!DOCTYPE html>
      <html lang='en'>
        <head>
          <meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=no"/>
          ${helmet.meta.toString()}
          ${helmet.script.toString()}
          <title>SickDay Box</title>
          <link rel="preload" as="font" type="font/ttf" href="/fonts/icomoon.ttf" crossorigin="anonymous">
          <link rel="preload" as="font" type="font/ttf" href="/fonts/Helvetica.ttf" crossorigin="anonymous">
          <link href="/${mainFiles[0]}" rel="stylesheet"/>
          ${cssStyles
            .map(style => {
              return `<link href="/${style.file}" rel="stylesheet"/>`;
            })
            .join('\n')}
            <link rel='manifest' href='manifest.json' ></link>
            <meta name='apple-mobile-web-app-capable' content="yes">
            <meta name="apple-mobile-web-app-status-bar-style" content="black"></meta>
            <meta name="apple-mobile-web-app-title" content="SickBox"></meta>
            <meta name="theme-color" content="#e00000"/>

        </head>
        <body>
          <div id="app">${content}</div>
          <div id="portal-root"></div>

<script>
window.__PRELOADED_STATE__ = ${(JSON.stringify(finalState) as any).replace(
          /</g,
          '\\u003c'
        )}
</script>
          <script type="text/javascript" src="/${
            vendorfiles[0]
          }" async ></script>
          ${jsBudles
            .map(bundle => {
              return `<script type="text/javascript" src="/${bundle.file}"  defer></script>`;
            })
            .join('\\n')}
          <script type="text/javascript" src="/${mainFiles[1]}"  defer></script>
          <script type="text/javascript" defer>
            if ('serviceWorker' in navigator) {
              window.addEventListener('load', function() {
                navigator.serviceWorker.register('/service-worker.js').then(function(registration) {
                  console.log('ServiceWorker registration successful with scope: ', registration.scope);
                }, function(err) {
                  console.log('ServiceWorker registration failed: ', err);
                });
              });
            }
          </script>
        </body>
      </html>
    `);
      })
      .catch(e => {
        console.log('errror', e);
        next(e);
      });
  } catch (e) {
    console.log('errr1r', e);
    next(e);
  }
});

Loadable.preloadAll().then(() => {
  app.listen(PORT, () =>
    console.log(`Frontend service listening on port: ${PORT}`)
  );
});
