import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Router } from 'react-router-dom';
import Loadable from 'react-loadable';
import App from './components/app/app';
import { browserHistory } from './history';

function loadApp() {
  const isProd = process.env.NODE_ENV === 'production';
  console.log('client');
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
