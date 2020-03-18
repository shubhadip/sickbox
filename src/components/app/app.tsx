import * as React from 'react';
import { renderRoutes } from 'react-router-config';
import Routes from './../../routerLinks';
import { Provider } from 'react-redux';
import store from './../../configureStore';
interface IProps {
  isMobileDevice?: boolean;
}
class App extends React.Component<any, any> {
  constructor(props: IProps) {
    super(props);
  }

  render() {
    return (
      <div>
        <Provider store={store}>{renderRoutes(Routes)}</Provider>
      </div>
    );
  }
}

export default App;
