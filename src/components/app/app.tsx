import * as React from 'react';
import { renderRoutes } from 'react-router-config';
import Routes from './../../routerLinks';

interface IProps {
  isMobileDevice?: boolean;
}
class App extends React.Component<any, any> {
  constructor(props: IProps) {
    super(props);
  }

  render() {
    return <div>{renderRoutes(Routes)}</div>;
  }
}

export default App;
