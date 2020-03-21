import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import Loadable from 'react-loadable';

import App from './components/app/app';

function loadApp() {
  const isProd = process.env.NODE_ENV === 'production';
  return !isProd
    ? ReactDOM.render(
        <BrowserRouter>
          <App />
        </BrowserRouter>,
        document.getElementById('app'),
      )
    : Loadable.preloadReady().then(() => {
        ReactDOM.hydrate(
          <BrowserRouter>
            <App />
          </BrowserRouter>,
          document.getElementById('app'),
        );
      });
}

loadApp();
