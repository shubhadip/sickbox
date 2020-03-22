import * as React from 'react';
import { hot } from 'react-hot-loader';
const logo = require('./../../assets/img/logo.png');

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
        <div className="container">
          <div className="wrapper">
            <div className="mobile-ham">
              <span className="icon" />
            </div>
            <div className="logo">
              <span>
                <img alt="logo" src={logo.default} />
              </span>
            </div>
            <div className="cart">
              <span className="icon_bag" />
            </div>
          </div>
        </div>
      </header>
    );
  }
}

export default hot(module)(Header);
