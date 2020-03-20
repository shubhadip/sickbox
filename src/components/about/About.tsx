import * as React from 'react';
import { hot } from 'react-hot-loader';
import { connect } from 'react-redux';

import './about.scss';
interface Iprops {
  isMobileDevice?: boolean;
}

class About extends React.Component<any, any> {
  constructor(props: Iprops) {
    super(props);
  }

  handleClick = () => {};

  componentDidMount() {}

  render() {
    return (
      <div className="container about-container">
        <p> I am About</p>
        <a href="/">Home</a>
      </div>
    );
  }
}

function mapStateToProps(state: any) {
  return {
    authenticated: state.auth,
  };
}
export default hot(module)(connect(mapStateToProps, null)(About));
