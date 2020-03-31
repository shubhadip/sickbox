import * as React from 'react';
import { hot } from 'react-hot-loader';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Subscribe from './../common/subscribe/Subscribe';

import './cart.scss';

interface Iprops {
  isMobileDevice?: boolean;
  products?: any[];
  quantity?: number;
}

class Cart extends React.Component<Iprops, any> {
  constructor(props: Iprops) {
    super(props);
  }

  componentDidMount() {}

  render() {
    const qty = this.props.quantity;
    return (
      <div className="cart-container">
        {!qty ? (
          <section className="empty-cart-wrapper">
            <div className="container">
              <h1> Your Shopping Cart is Empty</h1>
              <div className="continue-shopping">
                <p>you don't have items in your cart yet.</p>
                <Link to="/" className="w--text_input">
                  Continue Shopping
                </Link>
              </div>
            </div>
          </section>
        ) : (
          <div />
        )}
        <div className="subscribe container">
          <Subscribe />
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    products: state.cart && state.cart.products,
    quantity: state.cart && state.cart.total_quantity
  };
}
export default hot(module)(connect(mapStateToProps, null)(Cart));
