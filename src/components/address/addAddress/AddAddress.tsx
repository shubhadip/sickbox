import * as React from 'react';
import { hot } from 'react-hot-loader';
import { connect } from 'react-redux';
import Modal from '../../common/modal/Modal';
import {fetchlocationDetails} from './../../../actions/index'

import './addaddress.scss';
import Button from '../../common/Button/Button';
import TextInput from '../../common/TextInput/TextInput';
import MobileInput from '../../common/MobileInput/MobileInput';

interface Iprops {
  isMobileDevice?: boolean;
  onClose: any;
  onSubmit: any;
  fetchlocationDetails: any
  authenticated: boolean
  data: any[]
  states: any[]
}

const REQ_VALIDATIONS = [
  { name: 'required', message: 'Please enter First Name.' }
];

const MOBILE_VALIDATIONS = [
  { name: 'required', message: 'Please enter a mobile number.' },
  {
    name: 'integer',
    message: 'Please enter a valid phone number'
  },
  {
    name: 'mobile',
    message: 'Please enter a valid phone number'
  }
];

class AddAddress extends React.Component<Iprops, any> {
  private nameInput: React.RefObject<TextInput>;
  private mobileInput: React.RefObject<MobileInput>;
  private alternatemobileInput: React.RefObject<MobileInput>;
  private addressInput: React.RefObject<TextInput>;
  private landmarkInput: React.RefObject<TextInput>;
  private pincodeInput: React.RefObject<TextInput>;

  constructor(props: Iprops) {
    super(props);
    this.state = {
      name: '',
      mobile: '',
      alternate_mobile: '',
      pincode: '',
      address: '',
      landmark: ''
    };
    this.nameInput = React.createRef<TextInput>();
    this.mobileInput = React.createRef<MobileInput>();
    this.alternatemobileInput = React.createRef<MobileInput>();
    this.addressInput = React.createRef<TextInput>();
    this.landmarkInput = React.createRef<TextInput>();
    this.pincodeInput = React.createRef<TextInput>();
  }

  componentDidMount() {
    this.props.fetchlocationDetails()
  }

  onClose = () => {
    this.props.onClose();
  };

  onSubmit = () => {
    this.props.onSubmit();
  };

  render() {
    return (
      <div className="container add-address-container">
        <Modal
          customClass={'add-address-modal'}
          onClose={this.onClose}
          header={'Add New Address'}
          customHeaderClass={'add-address-header'}
        >
          <div className="add-address-container">
            <TextInput
              ref={this.nameInput}
              customClass={'name-input'}
              validations={REQ_VALIDATIONS}
              placeholder={'Name'}
              label={'Name'}
              value={this.state.name}
            />
            <div className="mobile-wrapper">
              <MobileInput
                ref={this.mobileInput}
                customClass={'mobile-input'}
                validations={MOBILE_VALIDATIONS}
                placeholder={'Mobile'}
                label={'Mobile'}
                value={this.state.mobile}
              />
              <MobileInput
                ref={this.alternatemobileInput}
                customClass={'alternate-input'}
                validations={MOBILE_VALIDATIONS}
                placeholder={'Alternate Mobile'}
                label={'Alternate Mobile'}
                value={this.state.alternate_mobile}
              />
            </div>
            <TextInput
              ref={this.addressInput}
              customClass={'address-input'}
              validations={REQ_VALIDATIONS}
              placeholder={'Address'}
              label={'Address'}
              value={this.state.address}
            />
            <TextInput
              ref={this.landmarkInput}
              customClass={'landmark-input'}
              validations={REQ_VALIDATIONS}
              placeholder={'Landmark'}
              label={'Landmark'}
              value={this.state.address}
            />
            <TextInput
              ref={this.pincodeInput}
              customClass={'pincode-input'}
              validations={REQ_VALIDATIONS}
              placeholder={'Pincode'}
              label={'Pincode'}
              value={this.state.pincode}
            />
            <div className="btn-add-container">
              <Button title={'SAVE'} theme={'orange'} onClick={this.onSubmit} />
              <Button
                title={'CANCEL'}
                theme={'bordered'}
                onClick={this.onClose}
              />
            </div>
          </div>
        </Modal>
      </div>
    );
  }
}

function mapStateToProps(state: any) {
  return {
    authenticated: state.auth.authenticated,
    states: state.static.states,
    data: state.static.data
  };
}
export default hot(module)(connect(mapStateToProps, {fetchlocationDetails})(AddAddress));
