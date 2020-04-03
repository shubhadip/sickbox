import * as React from 'react';
import { hot } from 'react-hot-loader';
import { browserHistory } from './../../history';
import { connect } from 'react-redux';
const logo = require('./../../assets/img/logo.png');
import Auth from './../auth/Auth';

import './header.scss';

interface IProps {
  isMobileDevice?: boolean;
  cart_quantity?: number;
}

interface IState {
  showAuth?: boolean;
}
class Header extends React.Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);
    this.state = {
      showAuth: false
    };
  }

  componentDidMount() {}

  handleClick = () => {
    browserHistory.push('/cart');
  };

  goToHomepage = () => {
    browserHistory.push('/');
  };

  showAuthComponent = () => {
    this.setState({
      showAuth: !this.state.showAuth
    });
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
            <div className="cart">
              <span className="icon_user" onClick={this.showAuthComponent} />
              {this.props.cart_quantity ? (
                <span className="cartCount">{this.props.cart_quantity}</span>
              ) : null}
              <span className="icon_bag" onClick={this.handleClick} />
            </div>
          </div>
        </div>
        {this.state.showAuth ? <Auth onClose={this.showAuthComponent} /> : null}
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
