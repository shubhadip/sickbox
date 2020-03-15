import * as React from 'react';
import * as ReactDOMServer from 'react-dom/server';
import { renderRoutes } from 'react-router-config';
import Loadable from 'react-loadable';
import { getBundles } from 'react-loadable/webpack';
import Routes from '../routerLinks';
import express from 'express';
import { StaticRouter } from 'react-router-dom';

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

  const content = ReactDOMServer.renderToString(
    <Loadable.Capture report={moduleName => modules.push(moduleName)}>
      <StaticRouter location={req.path} context={context}>
        <div>{renderRoutes(Routes)}</div>
      </StaticRouter>
    </Loadable.Capture>
  );

  const bundles = getBundles(stats, modules);
  const cssStyles = bundles.filter(bundle => bundle.file.endsWith('.css'));
  const jsBudles = bundles.filter(bundle => bundle.file.endsWith('.js'));

  res.send(`
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
          <script type="text/javascript" src="${
            vendorfiles[0]
          }" async ></script>
          ${jsBudles
            .map(bundle => {
              return `<script type="text/javascript" src="/${bundle.file}"  defer></script>`;
            })
            .join('\\n')}
          <script type="text/javascript" src="${mainFiles[1]}"  defer></script>
        </body>
      </html>
    `);
});

Loadable.preloadAll().then(() => {
  app.listen(PORT, () =>
    console.log(`Frontend service listening on port: ${PORT}`)
  );
});
