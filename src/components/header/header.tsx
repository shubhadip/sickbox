import * as React from 'react';
import { hot } from 'react-hot-loader';
import { browserHistory } from './../../history';
import { connect } from 'react-redux';
const logo = require('./../../assets/img/logo.png');

import './header.scss';

interface IProps {
  isMobileDevice?: boolean;
  cart_quantity?: number;
  authenticated?: boolean;
}

interface IState {
  showAuth?: boolean;
  ComponentClass: any;
}

class Header extends React.Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);
    this.state = {
      showAuth: false,
      ComponentClass: null
    };
  }

  componentDidMount() {}

  handleClick = () => {
    browserHistory.push('/cart');
  };

  showUserMenu = () => {
    console.log('show menu');
  };

  render() {
    const authenticated = this.props.authenticated;
    return (
      <header className="header-container">
        <div className="container">
          <div className="wrapper">
            <div className="mobile-ham">
              <span className="icon" />
            </div>
            <div className="logo">
              <a href="/">
                <img alt="logo" src={logo.default} />
              </a>
            </div>
            <div className="cart">
              {authenticated ? (
                <a className="login_wrapper" href="/profile">
                  <i className="iconh icon_user">
                    <span className="icont login">Profile</span>
                  </i>
                </a>
              ) : (
                <a className="login_wrapper" href="/login">
                  <i className="iconh icon_user">
                    <span className="icont login">Profile</span>
                  </i>
                </a>
              )}
              {this.props.cart_quantity ? (
                <span className="cartCount" onClick={this.handleClick}>
                  {this.props.cart_quantity}
                </span>
              ) : null}
              <a className="bag_wrapper" href="/cart">
                <i className="iconh icon_bag">
                  <span className="icont">Cart</span>
                </i>
              </a>
            </div>
          </div>
        </div>
      </header>
    );
  }
}

function mapStateToProps(state) {
  return {
    cart_quantity: state.cart && state.cart.total_quantity,
    authenticated: state.auth && state.auth.authenticated
  };
}

export default hot(module)(connect(mapStateToProps)(Header));
