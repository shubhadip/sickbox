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
      <div className="home-container">
        <p>I am Home Component</p>
        <a href="/contact">Contact</a>
      </div>
    );
  }
}

function mapStateToProps(state: any) {
  return {
    todos: state.todo.list
  };
}

export default hot(module)(connect(mapStateToProps, null)(Home));
