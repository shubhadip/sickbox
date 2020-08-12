import * as React from 'react';
import { hot } from 'react-hot-loader';
import { Helmet } from 'react-helmet';
import { connect } from 'react-redux';
import { fetchProductDetails } from './../../actions/index';
import HomeBox from './../functional/HomeBoxes/homeBox';
import HomePromote from './../functional/HomePromote/HomePromote';
import Subscribe from './../common/subscribe/Subscribe';

import { renderTitles, structuredDataOrganization } from './../../constants';
const product = require('./../../assets/img/product.png');

import './home.scss';

interface IProps {
  fetchProductDetails: any;
  items: any[];
  product: any;
}

class Home extends React.Component<IProps, any> {
  constructor(props: IProps) {
    super(props);
    this.state = {
      email: ''
    };
  }

  componentDidMount() {
    const { items } = this.props;
    if (!items.length) {
      this.props.fetchProductDetails('sick-day-box');
    }
  }

  renderSections = () => {
    const data = this.props.items;
    return data.map(article => {
      return (
        <HomeBox
          altTag={article.altTag}
          title={article.title}
          description={article.description}
          imageUrl={article.imageUrl}
          key={article.title}
        />
      );
    });
  };

  renderHomePromote = () => {
    return <HomePromote />;
  };

  render() {
    const meta_description =
      this.props.product && this.props.product.meta_description;
    const meta_keywords =
      this.props.product && this.props.product.meta_keywords;
    return (
      <>
        <Helmet>
          {meta_description ? (
            <meta name="description" content={meta_description} />
          ) : null}
          {meta_keywords ? (
            <meta name="keywords" content={meta_keywords} />
          ) : null}
          <script type="application/ld+json">
            {structuredDataOrganization}
          </script>
        </Helmet>
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
            <div className="homebox-wrapper">{this.renderSections()}</div>
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
          <div className="promote container">{this.renderHomePromote()}</div>
          <div className="subscribe container">
            <Subscribe />
          </div>
        </section>
      </>
    );
  }
}

function mapStateToProps(state) {
  return {
    items: (state.product && state.product && state.product.items) || [],
    product: state.product || {}
  };
}

export default hot(module)(
  connect(mapStateToProps, { fetchProductDetails })(Home)
);
