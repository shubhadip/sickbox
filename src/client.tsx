import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Router } from 'react-router-dom';
import Loadable from 'react-loadable';
import App from './components/app/app';
import { createBrowserHistory } from 'history';

const isForGHPAGE = __isForGHPAGE__;
const baseUrl = isForGHPAGE ? '/sickbox/' : '/';
const browserHistory: any = createBrowserHistory({ basename: baseUrl });

function loadApp() {
  const isProd = process.env.NODE_ENV === 'production';
  return !isProd
    ? ReactDOM.render(
        <Router history={browserHistory}>
          <App />
        </Router>,
        document.getElementById('app')
      )
    : Loadable.preloadReady().then(() => {
        ReactDOM.hydrate(
          <Router history={browserHistory}>
            <App />
          </Router>,
          document.getElementById('app')
        );
      });
}

loadApp();
