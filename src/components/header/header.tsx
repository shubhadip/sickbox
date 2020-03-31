import * as React from 'react';
import { hot } from 'react-hot-loader';
import { browserHistory } from './../../history';
import { connect } from 'react-redux';
const logo = require('./../../assets/img/logo.png');

import './header.scss';

interface Iprops {
  isMobileDevice?: boolean;
  cart_quantity?: number;
}

class Header extends React.Component<Iprops, any> {
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
              <span className="cartCount">{this.props.cart_quantity}</span>
              <span className="icon_bag" />
            </div>
          </div>
        </div>
      </header>
    );
  }
}

function mapStateToProps(state) {
  return {
    cart_quantity: state.cart && state.cart.total_quantity
  };
}

export default hot(module)(connect(mapStateToProps)(Header));
