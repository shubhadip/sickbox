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
      <header className="header-container">
        <p>I am Header Component</p>
      </header>
    );
  }
}

export default hot(module)(Header);
