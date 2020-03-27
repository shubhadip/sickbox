import * as React from 'react';
import { Provider } from 'react-redux';
import store from './../../configureStore';
import './../../scss/main.scss'; // this has to be on the top
import { routeMap } from '../../router';

interface IProps {
  isMobileDevice?: boolean;
}
class App extends React.Component<any, any> {
  constructor(props: IProps) {
    super(props);
  }

  render() {
    console.log('asd', this.props);
    return (
      <div>
        <Provider store={store}>{routeMap()}</Provider>
      </div>
    );
  }
}

export default App;
