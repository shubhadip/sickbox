import * as React from 'react';
import { hot } from 'react-hot-loader';
import { connect } from 'react-redux';

import './cart.scss';

interface Iprops {
  isMobileDevice?: boolean;
}

class Cart extends React.Component<any, any> {
  constructor(props: Iprops) {
    super(props);
  }

  componentDidMount() {}

  render() {
    return (
      <div className="cart-container">
        <p>I am Cart Component</p>
      </div>
    );
  }
}

function mapStateToProps() {
  return {};
}
export default hot(module)(connect(mapStateToProps, null)(Cart));
