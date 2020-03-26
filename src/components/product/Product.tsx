import * as React from 'react';
import { hot } from 'react-hot-loader';
import './product.scss';
import Subscribe from '../common/subscribe/Subscribe';
import TextInput from '../common/TextInput/TextInput';
import Button from '../common/Button/Button';
import { ingredients } from './../../constants';

interface IState {
  qty: string;
}

class Product extends React.Component<any, IState> {
  constructor(props) {
    super(props);
    this.state = {
      qty: '1'
    };
  }

  componentDidMount() {}

  handleChange() {}
  addToCart() {}
  renderIngredients() {
    return ingredients.map(item => <li key={item}>{item}</li>);
  }
  render() {
    return (
      <div className="product-container">
        <div className="">
          <section>
            <div className="bread-crum"> Home / sick-day-box</div>
            <div className="product-details-wrapper">
              <div className="productimage-wrapper">
                <div>
                  <img
                    className="product-img"
                    src="https://cdn.shopify.com/s/files/1/2225/6647/products/IMG_0004_2048x2048.png"
                    alt="product-image"
                  />
                </div>
              </div>
              <div className="detail-wrapper">
                <div className="title">Sick Day Box</div>
                <div className="price">Rs. 299</div>
                <div className="qty">
                  <p>Qty : </p>
                  <TextInput
                    value={this.state.qty}
                    onChange={() => this.handleChange}
                  />
                </div>
                <div className="add-to-cart">
                  <Button
                    onClick={() => this.addToCart}
                    title={'Add To Cart'}
                  />
                </div>
                <div className="ing">
                  <p className="desc-title">
                    Everything you need to survive a sick day in one convenient
                    box!{' '}
                  </p>
                  <p className="desc-subtitle">Each Box includes: </p>
                  <ul>{this.renderIngredients()}</ul>
                </div>
              </div>
            </div>
          </section>
        </div>
        <section className="subscribe">
          <Subscribe />
        </section>
      </div>
    );
  }
}

export default hot(module)(Product);
