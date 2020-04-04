import * as React from 'react';
import { hot } from 'react-hot-loader';
import { browserHistory } from './../../history';
import { connect } from 'react-redux';
const logo = require('./../../assets/img/logo.png');
// import Auth from './../auth/Auth';

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

  goToHomepage = () => {
    browserHistory.push('/');
  };

  showAuthComponent = () => {
    import('./../auth/Auth').then(component => {
      this.setState({ ComponentClass: component.default, showAuth: true });
    });
  };

  closeAuthComponent = () => {
    this.setState({
      showAuth: false
    });
  };

  render() {
    const authenticated = this.props.authenticated;
    const ComponentClass = this.state.ComponentClass;
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
            <div className="cart">
              <span
                className="icon_user"
                onClick={
                  !authenticated ? this.showAuthComponent : this.showUserMenu
                }
              />
              {this.props.cart_quantity ? (
                <span className="cartCount" onClick={this.handleClick}>
                  {this.props.cart_quantity}
                </span>
              ) : null}
              <span className="icon_bag" onClick={this.handleClick} />
            </div>
          </div>
        </div>
        {this.state.showAuth ? (
          // <Auth onClose={this.showAuthComponent} />
          ComponentClass ? (
            <ComponentClass onClose={this.closeAuthComponent} />
          ) : (
            <div />
          )
        ) : null}
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
