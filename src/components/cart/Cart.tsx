import * as React from 'react';
import { hot } from 'react-hot-loader';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Subscribe from './../common/subscribe/Subscribe';
const img = require('./../../assets/img/product.png');
import './cart.scss';
import Button from '../common/Button/Button';
import Modal from '../common/modal/Modal';

interface Iprops {
  isMobileDevice?: boolean;
  products?: any[];
  quantity?: number;
}

interface IState {
  showQtyModal?: boolean;
}
class Cart extends React.Component<Iprops, IState> {
  constructor(props: Iprops) {
    super(props);
    this.state = {
      showQtyModal: false
    };
  }

  componentDidMount() {}
  toggleQtyModal = () => {
    this.setState({ ...this.state, showQtyModal: !this.state.showQtyModal });
  };

  renderQtyModal = () => {
    const numbersArray = [1, 2, 3, 4, 5];
    return (
      <Modal
        customClass={'qty-modal'}
        isCloseOnOutSideClick={true}
        isCloseOnEscape={true}
        onClose={this.toggleQtyModal}
      >
        <ul>
          {numbersArray.map(count => {
            return <li key={count}>{count}</li>;
          })}
        </ul>
      </Modal>
    );
  };

  renderProducts = () => {
    const { products = [] } = this.props;
    const data = products.map(product => {
      return (
        <div className="cart-product" key={product.name}>
          <span>
            <i className="icon_delete" />
          </span>
          <div>
            <img
              className="img-responsive"
              src={img.default}
              alt={product.name}
            />
          </div>
          <div className="cart-desc">
            <p className="product-name">{product.name}</p>
            <p className="product-price">
              <i className="icon_rupee">{product.price}</i>
            </p>
            <p className="product-qty" onClick={this.toggleQtyModal}>
              <span> Qty : </span>
              <span className="qty">{product.selected_qty}</span>
            </p>
            <p className="remove-product">Remove</p>
          </div>
        </div>
      );
    });
    return data;
  };
  render() {
    const qty = this.props.quantity;
    return (
      <div className="cart-container">
        {qty === 0 ? (
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
          <section className="cart-wrapper">
            <div className="product-wrapper">
              <p className="mycart-title">My Cart</p>
              {this.renderProducts()}
            </div>
            <div className="summary-wrapper">
              <p className="summary-row">
                {' '}
                <b>Order Summary</b>
              </p>
              <div>
                <div className="summary-row">
                  <p className="key">Total MRP (Inclusive of all taxes)</p>
                  <p className="value solidy">
                    <i>
                      <b className="icon_rupee">349</b>
                    </i>
                  </p>
                </div>
                <div className="summary-row">
                  <p className="key">Shipping Charges</p>
                  <p className="value free">
                    <>FREE</>
                  </p>
                </div>
                <div className="summary-row">
                  <p className="key">Bag Discount</p>
                  <p className="value free">
                    <i className="icon_rupee">
                      <b>50</b>
                    </i>
                  </p>
                </div>
                <div className="summary-row">
                  <p className="key">
                    <b>Payable Amount</b>
                  </p>
                  <p className="value solidy">
                    <i className="icon_rupee">
                      <b>299</b>
                    </i>
                  </p>
                </div>
              </div>
              <hr />
              <div className="summary-row">
                <p className="key">
                  <b>Final Amount</b>
                </p>
                <p className="value solidy">
                  <i className="icon_rupee">
                    <b>299</b>
                  </i>
                </p>
              </div>
              <Button title={'Select Address'} />
            </div>
          </section>
        )}
        {this.state.showQtyModal ? this.renderQtyModal() : null}
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
