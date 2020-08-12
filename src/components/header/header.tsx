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
              <a href='/'>
                <img alt="logo" src={logo.default} />
              </a>
            </div>
            <div className="cart">
              {authenticated ? (
                <div className="login_wrapper">
                  <a className="iconh icon_user" href="/profile">
                    <p className="icont login">Profile</p>
                  </a>
                </div>
              ) : (
                <div className="login_wrapper">
                  <a className="iconh icon_user" href="/login">
                    <p className="icont login">Profile</p>
                  </a>
                </div>
              )}
              {this.props.cart_quantity ? (
                <span className="cartCount" onClick={this.handleClick}>
                  {this.props.cart_quantity}
                </span>
              ) : null}
              <div className="bag_wrapper">
                <a className="iconh icon_bag" href="/cart">
                  <p className="icont">Cart</p>
                </a>
              </div>
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
