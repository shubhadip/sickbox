import * as React from 'react';
import { hot } from 'react-hot-loader';
import { connect } from 'react-redux';
import Subscribe from './../common/subscribe/Subscribe';
import { fetchAddresses } from './../../actions/address_actions';

import './address.scss';
import Button from '../common/Button/Button';
interface Iprops {
  isMobileDevice?: boolean;
  fetchAddresses: any;
  addressList?: any;
}

interface IState {
  address?: any;
}

class Address extends React.Component<Iprops, IState> {
  constructor(props: Iprops) {
    super(props);
    this.state = {
      address: {}
    };
  }

  handleClick = () => {};

  componentDidMount() {
    this.props.fetchAddresses();
  }

  selectAddress = address => {
    this.setState({
      address
    });
  };

  redirectToPayment = () => {
    debugger
  }

  renderAddress = () => {
    return this.props.addressList.map(address => {
      return (
        <div
          className={['list-wrapper'].join(' ')}
          key={address.id}
          onClick={() => this.selectAddress(address)}
        >
          <span
            className={[
              address.id == this.state.address.id ? 'select-adderss' : ''
            ].join(' ')}
          />
          <p className="name">
            <b>{address.full_name}</b>
          </p>
          <p className="address">{address.address},</p>
          <p className="city">
            <span>
              {address.city}
              {', '}
            </span>
            {address.pincode}
          </p>
          <p className="state">
            <span>
              {address.state}
              {', '}
            </span>
            {address.country}
          </p>
          <p>
            Mobile: <b>{address.mobile}</b>
          </p>
          {
            this.state.address.id == address.id ? <Button onClick={this.redirectToPayment} title={'Make Payment'}></Button> : null
          }
        </div>
      );
    });
  };
  render() {

    return (
      <div className="ac">
        <div>
        <p className='sd-title'>Select Address</p>
        <section className="a-wrap">
          <div className="l-s">
            {this.renderAddress()}
          </div>
          <div className="r-s">
            <p className="summary-row">
              {' '}
              <b>Order Summary</b>
            </p>
            <div>
              <div className="summary-row">
                <p className="key">Total MRP (Inclusive of all taxes)</p>
                <p className="value solidy">
                  <i>
                    <b className="icon_rupee">349</b>
                  </i>
                </p>
              </div>
              <div className="summary-row">
                <p className="key">Shipping Charges</p>
                <p className="value free">
                  <>FREE</>
                </p>
              </div>
              <div className="summary-row">
                <p className="key">Bag Discount</p>
                <p className="value free">
                  <i className="icon_rupee">
                    <b>50</b>
                  </i>
                </p>
              </div>
              <div className="summary-row">
                <p className="key">
                  <b>Payable Amount</b>
                </p>
                <p className="value solidy">
                  <i className="icon_rupee">
                    <b>299</b>
                  </i>
                </p>
              </div>
            </div>
            <hr />
            <div className="summary-row">
              <p className="key">
                <b>Final Amount</b>
              </p>
              <p className="value solidy">
                <i className="icon_rupee">
                  <b>299</b>
                </i>
              </p>
            </div>
          </div>
        </section>
        <div className="subscribe container">
          <Subscribe />
        </div></div>
      </div>
    );
  }
}

function mapStateToProps(state: any) {
  return {
    addressList: state.address.addresses
  };
}
export default hot(module)(
  connect(mapStateToProps, { fetchAddresses })(Address)
);
