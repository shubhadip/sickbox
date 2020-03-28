import * as React from 'react';
import { hot } from 'react-hot-loader';
import { browserHistory } from './../../history';
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

  handleClick = () => {
    browserHistory.push('/cart');
  };

  goToHomepage = () => {
    browserHistory.push('/');
  };

  render() {
    return (
      <header className="header-container">
        <div className="container">
          <div className="wrapper">
            <div className="mobile-ham">
              <span className="icon" />
            </div>
            <div className="logo" onClick={this.goToHomepage}>
              <span>
                <img alt="logo" src={logo.default} />
              </span>
            </div>
            <div className="cart" onClick={this.handleClick}>
              <span className="icon_bag" />
            </div>
          </div>
        </div>
      </header>
    );
  }
}

export default hot(module)(Header);
