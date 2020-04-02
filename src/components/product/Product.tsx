import * as React from 'react';
import { hot } from 'react-hot-loader';
import './product.scss';
import Subscribe from '../common/subscribe/Subscribe';
import Button from '../common/Button/Button';
import { connect } from 'react-redux';
import { fetchProductDetails, addToCart } from './../../actions/index';
import { ingredients, productData } from './../../constants';
interface IState {
  qty: string;
  showMore: boolean;
  ingredient: boolean;
  nutritionFacts: boolean;
  howToUse: boolean;
}

class Product extends React.Component<any, IState> {
  constructor(props) {
    super(props);
    this.state = {
      qty: '1',
      showMore: false,
      ingredient: false,
      nutritionFacts: false,
      howToUse: false
    };
  }

  componentDidMount() {
    this.props.fetchProductDetails('sick-day-box');
  }

  handleChange() {}
  handleCart = () => {
    this.props.addToCart({
      product_id: 1,
      quantity: 1
    });
  };

  handleShowMore = () => {
    this.setState({
      ...this.state,
      showMore: !this.state.showMore
    });
  };

  handleNutritionFact = () => {
    this.setState({
      ...this.state,
      nutritionFacts: !this.state.nutritionFacts
    });
  };

  handleHowToUse = () => {
    this.setState({
      ...this.state,
      howToUse: !this.state.howToUse
    });
  };

  handleIngredientToggle = () => {
    this.setState({
      ...this.state,
      ingredient: !this.state.ingredient
    });
  };

  renderIngredients(asinline: boolean = false) {
    return ingredients.map((item, index) => (
      <li key={item}>
        {item}
        {asinline && index < ingredients.length - 1 ? ',' : ''}
      </li>
    ));
  }

  renderArticleImage = () => {
    return productData.map(data => {
      return (
        <li key={data.title}>
          <img src={data.imgUrl} alt={data.title} />
          <p>{data.title}</p>
        </li>
      );
    });
  };
  render() {
    const { ingredient, nutritionFacts, howToUse } = this.state;
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
                <div className="title">
                  <span>Sick Day Box </span>
                </div>
                <div className="rupee">
                  <i className="icon_rupee">399</i>
                </div>
                <div className="price">contains : </div>
                <hr />
                <ul className="title-wrapper">{this.renderArticleImage()}</ul>
                <div className="add-to-cart">
                  <Button onClick={this.handleCart} title={'Add To Cart'} />
                </div>
                {/* <div className="ing">
                  <p className="desc-title">
                    Everything you need to survive a sick day in one convenient
                    box!{' '}
                  </p>
                  <p className="desc-subtitle">Each Box includes: </p>
                  <ul>{this.renderIngredients()}</ul>
                </div> */}
              </div>
            </div>
          </section>
        </div>
        <section className="">
          <div className="ingr-wrapper">
            <div className="ingr-content">
              <p className="desc-title">OVERVIEW</p>
              <p className="desc-subtitle">
                Kicks fatigue to the curb. Leaves inflammation in the dust.
              </p>
              {this.state.showMore ? (
                <p className="desc">
                  Makes bloating a thing of the past. It's a bird, it's a plane,
                  it's Ginger + Greens! And while it may sound too good to be
                  true, this thick and velvety, not-crazy-sweet, perfectly zingy
                  blend does it all. With stomach-soothing ginger, apple cider
                  vinegar, mineral-dense spinach, and avocado, it's the hero
                  your taste buds deserve.
                </p>
              ) : null}
              <Button
                onClick={this.handleShowMore}
                title={this.state.showMore ? 'Read Less' : 'Show More'}
              />
            </div>
            <div>
              <img
                className="ingr-image"
                src="https://images.ctfassets.net/iw4cawak30d4/5etL3Uy9hmgNdwa7u9HMaw/661f3ad60f7e0ac8fe0a79496b9a0bd0/Ginger___Greens_ingredients-image_2x-squashed.jpeg?w=550&fl=progressive"
                alt={'item-main'}
              />
            </div>
          </div>
        </section>
        <section>
          <div className="container ingredient-dd">
            <div>
              <p className="ingrients-p">
                <span className="contain">Ingredients</span>
                <span
                  className={[
                    'icon_down_solid',
                    ingredient ? 'opened' : ''
                  ].join(' ')}
                  onClick={this.handleIngredientToggle}
                />
              </p>
              {/* {ingredient ? ( */}
              <div
                className={[ingredient ? ' ingr-opened' : 'ingr-closed'].join(
                  ' '
                )}
              >
                <p>Contains : </p>
                <ul>{this.renderIngredients(true)}</ul>
              </div>
              {/* ) : null} */}
            </div>
          </div>
          <div className="container ingredient-dd">
            <div>
              <p className="ingrients-p">
                <span className="contain">Nutrition Facts</span>
                <span
                  className={[
                    'icon_down_solid',
                    nutritionFacts ? 'opened' : ''
                  ].join(' ')}
                  onClick={this.handleNutritionFact}
                />
              </p>
              <div
                className={[
                  nutritionFacts ? ' nutri-opened' : 'nutri-closed'
                ].join(' ')}
              >
                <p>Contains : </p>
                <ul>{this.renderIngredients(true)}</ul>
              </div>
            </div>
          </div>
          <div className="container ingredient-dd">
            <div>
              <p className="ingrients-p">
                <span className="contain">How To Use</span>
                <span
                  className={['icon_down_solid', howToUse ? 'opened' : ''].join(
                    ' '
                  )}
                  onClick={this.handleHowToUse}
                />
              </p>
              {/* {howToUse ? ( */}
              <div
                className={[
                  howToUse ? ' howtouse-opened' : 'howtouse-closed'
                ].join(' ')}
              >
                <p>Contains : </p>
                <ul>{this.renderIngredients(true)}</ul>
              </div>
              {/* ) : null} */}
            </div>
          </div>
        </section>
        {/* <section >
          <div className="container">
            <p className="desc-title">
              Everything you need to survive a sick day in one convenient box!{' '}
            </p>
            <p className="desc-subtitle">Each Box includes: </p>
            <div className="ingr">
              <ul>
                {ingredientMap1.map(data => {
                  return <li key={data}>{data}</li>;
                })}
              </ul>
              <ul>
                {ingredientMap2.map(data => {
                  return <li key={data}>{data}</li>;
                })}
              </ul>
              <ul>
                {ingredientMap3.map(data => {
                  return <li key={data}>{data}</li>;
                })}
              </ul>
            </div>
          </div>
        </section> */}
        <section className="subscribe">
          <Subscribe />
        </section>
      </div>
    );
  }
}

export default hot(module)(
  connect(null, { addToCart, fetchProductDetails })(Product)
);
