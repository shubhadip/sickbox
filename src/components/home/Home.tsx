import * as React from 'react';
import { hot } from 'react-hot-loader';
import { connect } from 'react-redux';
import { fetchAboutData } from './../../helpers/loadData';
import HomeBox from './../common/HomeBoxes/homeBox';
import Button from './../common/Button/Button';
import TextInput from './../common/TextInput/TextInput';

const product = require('./../../assets/img/product.png');
import './home.scss';

interface Iprops {
  isMobileDevice?: boolean;
}

const data = [
  {
    title: 'Amazon Movie Rental',
    desc:
      'Included in the box is a gift card for one movie rental from Amazon.',
    altTag: 'Amazon Movie Rental',
    imgUrl: 'https://cdn.shopify.com/s/files/1/2225/6647/files/12_660x275.png'
  },
  {
    title: 'Thermometer',
    desc: "You know the old hand on the forehead trick doesn't cut it",
    altTag: 'Thermometer',
    imgUrl: 'https://cdn.shopify.com/s/files/1/2225/6647/files/10_660x275.png'
  },
  {
    title: 'Emergen-C',
    desc:
      "Immune boosting Vitamin C, B Vitamins, and Electrolytes. It's never too late.",
    altTag: 'Emergen-C',
    imgUrl: 'https://cdn.shopify.com/s/files/1/2225/6647/files/6_660x275.png'
  },
  {
    title: 'Hot Cocoa',
    desc: 'Because not all drinks needs to be "healthy" when you are sick.',
    altTag: 'Hot Cocoa',
    imgUrl: 'https://cdn.shopify.com/s/files/1/2225/6647/files/4_660x275.png'
  },
  {
    title: 'Saltines + Chicken Noodle Soup',
    desc:
      "What's a sick day without some chicken noodle soup and some Saltines in the mix? ",
    altTag: 'Saltines + Chicken Noodle Soup',
    imgUrl:
      'https://cdn.shopify.com/s/files/1/2225/6647/files/chickensoupsaltinecombo_660x275.png?v=1511142309'
  },
  {
    title: 'Ginger Drops',
    desc: 'Feeling queasy? These ginger candies are a safe and tasty fix.',
    altTag: 'Ginger Drops',
    imgUrl: 'https://cdn.shopify.com/s/files/1/2225/6647/files/11_660x275.png'
  }
];

const renderTitles = [
  'ginger ale',
  'herbal tea',
  'breath mints',
  'tissues',
  'cough drops'
];

class Home extends React.Component<any, any> {
  constructor(props: Iprops) {
    super(props);
    this.state = {
      email: ''
    };
  }

  componentDidMount() {
    if (!this.props.todos.length) {
      fetchAboutData();
    }
  }

  handleClick() {
    debugger;
  }
  handleChange() {}

  renderSections = () => {
    return data.map(article => {
      return (
        <HomeBox
          altTag={article.altTag}
          title={article.title}
          desc={article.desc}
          url={article.imgUrl}
          key={article.altTag}
        />
      );
    });
  };
  render() {
    return (
      <>
        <section className="hcontainer">
          <div className="container">
            <div className="hcontainer-banner">
              <div className="wrapper">
                <h1 className="heading">The Sick Day Survival Kit</h1>
                <p className="sub-heading">
                  Everything you need to make it through a sick day.
                </p>
              </div>
              <div className="">
                <img
                  className="product-img"
                  alt="sickbox-product"
                  src={product.default}
                />
              </div>
            </div>
          </div>
          <div className="content container">
            <h1>Whats Inside</h1>
            {this.renderSections()}
          </div>
          <div className="title-wrapper container">
            <hr />
            <section>
              <p>And So much More</p>
              <ul>
                {renderTitles.map(title => {
                  return <li key={title}>{title}</li>;
                })}
              </ul>
            </section>
            <hr />
          </div>
          <div className="subscribe container">
            <section>
              <h1>Health Tips & Discounts</h1>
              <p className="desc">
                Subscribe to our newsletter to get discounts and tips to stay
                healthy.{' '}
              </p>
              <article>
                <TextInput
                  value={this.state.email}
                  onChange={() => this.handleChange}
                  placeholder={'your@email.com'}
                />
                <Button title={'Subscribe'} onClick={() => this.handleClick} />
              </article>
            </section>
          </div>
        </section>
      </>
    );
  }
}

function mapStateToProps(state: any) {
  return {
    todos: state.todo.list
  };
}

export default hot(module)(connect(mapStateToProps, null)(Home));
