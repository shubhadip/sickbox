import * as React from 'react';
import { hot } from 'react-hot-loader';
import { connect } from 'react-redux';
import { fetchAboutData } from './../../helpers/loadData';
const product = require('./../../assets/img/product.png');

import './home.scss';
interface Iprops {
  isMobileDevice?: boolean;
}

class Home extends React.Component<any, any> {
  constructor(props: Iprops) {
    super(props);
  }

  componentDidMount() {
    if (!this.props.todos.length) {
      fetchAboutData();
    }
  }

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
