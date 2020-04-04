import * as React from 'react';
import { Provider } from 'react-redux';
import store from './../../configureStore';
import './../../scss/main.scss'; // this has to be on the top
import RouteMap from '../../router';
import { getAccessToken } from './../../credentials/access_credentials';
import { AUTH_USER } from './../../actions/types';

interface IProps {
  isMobileDevice?: boolean;
}
class App extends React.Component<any, any> {
  constructor(props: IProps) {
    super(props);
    const token = getAccessToken();

    if (token) {
      store.dispatch({ type: AUTH_USER });
    }
  }

  render() {
    return (
      <div>
        <Provider store={store}>
          <RouteMap />
        </Provider>
      </div>
    );
  }
}

export default App;
