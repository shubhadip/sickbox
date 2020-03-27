import * as React from 'react';
import { hot } from 'react-hot-loader';
import { connect } from 'react-redux';
import { fetchAboutData } from './../../helpers/loadData';
import HomeBox from './../functional/HomeBoxes/homeBox';
import HomePromote from './../functional/HomePromote/HomePromote';
import Subscribe from './../common/subscribe/Subscribe';

import { data, renderTitles } from './../../constants';
const product = require('./../../assets/img/product.png');
import './home.scss';

// interface Iprops {
//   isMobileDevice?: boolean;
//   todos?: string[];
// }

// interface IState {
//   todo?: {
//     list: string[];
//   };
//   email?: string;
// }

class Home extends React.Component<any, any> {
  constructor(props) {
    super(props);
    this.state = {
      email: ''
    };
  }

  componentDidMount() {
    const { todos = [] } = this.props;
    if (!todos.length) {
      fetchAboutData();
    }
  }

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

  renderHomePromote = () => {
    return <HomePromote />;
  };

  render() {
    console.log('hkhkjhjk',this.props)
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
    todos: state.todo && state.todo.list
  };
}

export default hot(module)(connect(mapStateToProps, null)(Home));
