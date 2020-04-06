import * as React from 'react';
import { hot } from 'react-hot-loader';
import { connect } from 'react-redux';

import './payment.scss';
interface Iprops {
  isMobileDevice?: boolean;
}

class Payment extends React.Component<any, any> {
  constructor(props: Iprops) {
    super(props);
  }

  handleClick = () => {};

  componentDidMount() {}

  render() {
    return (
      <div className="container payment-container">
        <p> I am payment</p>
        <a href="/">Home</a>
      </div>
    );
  }
}

function mapStateToProps(state: any) {
  return {};
}
export default hot(module)(connect(mapStateToProps, null)(Payment));
