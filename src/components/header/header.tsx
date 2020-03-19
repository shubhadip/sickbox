import * as React from 'react';
import { hot } from 'react-hot-loader';
import './header.scss';

interface Iprops {
  isMobileDevice?: boolean;
}

class Header extends React.Component<any, any> {
  constructor(props: Iprops) {
    super(props);
  }

  componentDidMount() {}

  render() {
    return (
      <div className="header-container">
        <p>I am Header Component</p>
      </div>
    );
  }
}

export default hot(module)(Header);
