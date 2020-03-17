import * as React from 'react';
import { hot } from 'react-hot-loader';
import './home.scss';
interface Iprops {
  isMobileDevice?: boolean;
}

class Home extends React.Component<any, any> {
  constructor(props: Iprops) {
    super(props);
  }

  render() {
    return (
      <div className="home-container">
        <p>I am Home Component</p>
        {/* <a href="/about">About</a> <br/> */}
        <a href="/contact">Contact</a>
      </div>
    );
  }
}

export default hot(module)(Home);
