import * as React from 'react';
import { hot } from 'react-hot-loader';
import { connect } from 'react-redux';
import { fetchAboutData } from './../../helpers/loadData';

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
        <section className="home-hero-container">
          <div className="container">
            <div className="row">
              <div className="col-sm-6">
                <h1 className="heading">The Sick Day Survival Kit</h1>
                <p className="sub-heading">
                  Everything you need to make it through a sick day.
                </p>
              </div>
              <div className="col-sm-6">
                <img
                  alt=""
                  src="//cdn.shopify.com/s/files/1/2225/6647/files/front_cropped_1440x640.png?v=1511110579"
                ></img>
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
