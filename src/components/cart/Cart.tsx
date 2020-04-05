import * as React from 'react';
import { hot } from 'react-hot-loader';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Subscribe from './../common/subscribe/Subscribe';
import { updateCart, removeProduct } from './../../actions/index';
const img = require('./../../assets/img/product.png');
import './cart.scss';
import Button from '../common/Button/Button';
import Modal from '../common/modal/Modal';
import Auth from './../auth/Auth';

interface Iprops {
  isMobileDevice?: boolean;
  products?: any[];
  quantity?: number;
  updateCart?: any;
  removeProduct?: any;
  authenticated?: boolean;
}

interface IState {
  showQtyModal?: boolean;
  selectedProduct?: any;
  showAuth?: boolean;
}
class Cart extends React.Component<Iprops, IState> {
  constructor(props: Iprops) {
    super(props);
    this.state = {
      showQtyModal: false,
      showAuth: false
    };
  }

  componentDidMount() {}
  toggleQtyModal = () => {
    this.setState({ ...this.state, showQtyModal: !this.state.showQtyModal });
  };

  showAuthComponent = () => {
    this.setState({
      showAuth: !this.state.showAuth
    });
  };

  updateCartQty = (qty?: number) => {
    const payload = {
      cart_id: this.state.selectedProduct.cart_id,
      quantity: qty,
      product_id: this.state.selectedProduct.product_id
    };
    this.props.updateCart(payload);
    this.toggleQtyModal();
  };

  renderQtyModal = () => {
    const numbersArray = [1, 2, 3, 4, 5];
    const selectedQty =
      this.state.selectedProduct && this.state.selectedProduct.selected_qty;
    return (
      <Modal
        customClass={'qty-modal'}
        isCloseOnOutSideClick={true}
        isCloseOnEscape={true}
        onClose={this.toggleQtyModal}
        position={'center'}
        header={'Select Quantity'}
        customHeaderClass={'qty-header'}
      >
        <ul>
          {numbersArray.map(count => {
            return (
              <li
                className={[selectedQty === count ? 'selected' : ''].join(' ')}
                key={count}
                onClick={() => this.updateCartQty(count)}
              >
                {count}
              </li>
            );
          })}
        </ul>
      </Modal>
    );
  };
  selectedCartProduct = product => {
    const data = {
      ...this.state,
      ...{ selectedProduct: product },
      showQtyModal: !this.state.showQtyModal
    };
    this.setState({ ...data });
  };
  removeProduct = (product: any) => {
    const payload = {
      cart_id: product.cart_id,
      product_id: product.product_id
    };
    this.props.removeProduct(payload);
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
            <p
              className="product-qty"
              onClick={() => {
                this.selectedCartProduct(product);
              }}
            >
              <span> Qty : </span>
              <span className="qty">{product.selected_qty}</span>
            </p>
            <p
              className="remove-product"
              onClick={() => this.removeProduct(product)}
            >
              Remove
            </p>
          </div>
        </div>
      );
    });
    return data;
  };
  handleSelectAddress = () => {
    if (this.props.authenticated) {
    } else {
      this.showAuthComponent();
    }
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
              <Button
                title={'Select Address'}
                onClick={this.handleSelectAddress}
              />
            </div>
          </section>
        )}
        {this.state.showAuth ? <Auth onClose={this.showAuthComponent} /> : null}
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
    quantity: state.cart && state.cart.total_quantity,
    authenticated: state.auth && state.auth.authenticated
  };
}
export default hot(module)(
  connect(mapStateToProps, { updateCart, removeProduct })(Cart)
);
