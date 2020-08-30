import React from 'react';
import './Login.scss';

import {
  EMAIL_VALIDATIONS,
  MOBILE_VALIDATIONS,
  PASSWORD_VALIDATIONS
} from './../../constants';
import TextInput from '../common/TextInput/TextInput';
import PasswordInput from '../common/Password/PasswordInput';
import MobileInput from '../common/MobileInput/MobileInput';
import Button from './../common/Button/Button';
import OtpInput from 'react-otp-input';
import { GoogleLogin } from 'react-google-login';
import { parseQueryParams } from '../../utils/TransitionUtils';

interface Iprops {
  customClass?: string;
}

interface Istate {
  email: string;
  password: string;
  otp: string;
  showOTP: boolean;
  showOtpLogin: boolean;
  mobile: string;
  moveToCheckout: boolean;
}

class Login extends React.Component<Iprops, Istate> {
  private emailInput: React.RefObject<TextInput>;
  private passwordInput: React.RefObject<PasswordInput>;
  private mobileInput: React.RefObject<MobileInput>;

  constructor(props) {
    super(props);
    const isCheckoutStage = parseQueryParams(props.location.search);
    this.state = {
      email: '',
      password: '',
      otp: '',
      showOTP: false,
      showOtpLogin: false,
      mobile: '',
      moveToCheckout: isCheckoutStage['movetocheckout'] === 'true' || false
    };
    this.emailInput = React.createRef<TextInput>();
    this.passwordInput = React.createRef<PasswordInput>();
    this.mobileInput = React.createRef<MobileInput>();
  }

  handleFieldChange = (fieldName, e) => {
    const value = e;
    this.setState({
      ...this.state,
      ...{ [fieldName]: value }
    });
  };

  edit = () => {
    this.setState({
      ...this.state,
      showOtpLogin: true,
      showOTP: false
    });
  };

  showOTPField = () => {
    console.log('called', this.state);
    if (this.emailInput.current?.isValid(true)) {
      const email = this.emailInput.current?.getValue();
      console.log(email);
    }
  };

  handleOTPChange = otp =>
    this.setState({
      ...this.state,
      otp
    });

  handleSubmit = e => {
    // if move To Checkout is set true send user to checkout address page
    e.preventDefault();
    if (this.state.showOTP && this.state.showOtpLogin && this.state.otp) {
      const email = this.state.email;
      const otp = this.state.otp;
      console.log(otp);
      console.log(email);
    } else {
      if (
        this.emailInput.current?.isValid(true) &&
        this.passwordInput.current?.isValid(true)
      ) {
        const email = this.emailInput.current?.getValue();
        const password = this.passwordInput.current?.getValue();
        console.log(email);
        console.log(password);
      }
    }
  };

  toggleLogin = () => {
    this.setState({
      ...this.state,
      showOtpLogin: !this.state.showOtpLogin
    });
  };

  renderOtpLogin = () => {
    return (
      <div>
        {!this.state.showOTP ? (
          <MobileInput
            ref={this.mobileInput}
            customClass={'mobile-input'}
            validations={MOBILE_VALIDATIONS}
            label={'Mobile'}
            value={this.state.mobile}
            onChange={e => this.handleFieldChange('mobile', e)}
            showLabel={true}
          />
        ) : null}
        {this.state.showOTP ? (
          <div style={{ position: 'relative', fontSize: '12px' }}>
            <label> Enter OTP : </label>
            <label className="edit-mobile" onClick={this.edit}>
              <span> {this.state.mobile} </span> Edit
            </label>
            <OtpInput
              onChange={this.handleOTPChange}
              numInputs={4}
              separator={<span>-</span>}
              containerStyle={'otpcontainerStyle'}
              inputStyle={'otpinputStyle'}
              focusStyle={'otpfocusStyle'}
              errorStyle={'otperrorStyle'}
              isInputNum={true}
              value={this.state.otp}
            />
          </div>
        ) : null}
        <Button
          customClass={'auth-submit'}
          title={this.state.showOTP ? 'Login' : 'Continue'}
          onClick={
            !this.state.showOtpLogin ||
            (this.state.showOTP && this.state.showOtpLogin && this.state.otp)
              ? this.handleSubmit
              : this.showOTPField
          }
          theme={'orange'}
        />
        <div className="otp-text" onClick={this.toggleLogin}>
          <span>Login via {this.state.showOtpLogin ? 'Email' : 'OTP'}</span>
        </div>
      </div>
    );
  };

  renderLogin = () => {
    const registerUrl = `/register?movetocheckout=${this.state.moveToCheckout}`;
    return (
      <>
        <div className="signup-text">
          <a href={registerUrl}>Sign Up?</a>
        </div>
        <h4 className="header">Sign in to your account</h4>
        <form>
          <TextInput
            ref={this.emailInput}
            customClass={'email-input'}
            validations={EMAIL_VALIDATIONS}
            label={'Email'}
            value={this.state.email}
            onChange={e => this.handleFieldChange('email', e)}
            showLabel={true}
          />
          <PasswordInput
            ref={this.passwordInput}
            customClass={'password-input'}
            validations={PASSWORD_VALIDATIONS}
            label={'Password'}
            value={this.state.password}
            onChange={e => this.handleFieldChange('password', e)}
            showLabel={true}
          />
          <Button
            customClass={'auth-submit'}
            title={'Sign In'}
            onClick={this.handleSubmit}
            theme={'orange'}
          />
          <div className="otp-text" onClick={this.toggleLogin}>
            <span>Login via {this.state.showOtpLogin ? 'Email' : 'OTP'}</span>
          </div>
        </form>
      </>
    );
  };

  render() {
    return (
      <div className={['loginWrapper', this.props.customClass].join(' ')}>
        {this.state.showOtpLogin ? this.renderOtpLogin() : this.renderLogin()}
        <p className="or">or Connect with Social Media</p>
        <GoogleLogin
          clientId="658977310896-knrl3gka66fldh83dao2rhgbblmd4un9.apps.googleusercontent.com"
          buttonText="Login"
          render={renderProps => (
            <div className="gwrapper">
              <img
                src={require('./../../assets/img/google-logo.png').default}
                alt="Google"
                className="imggplus"
              />
              <Button
                onClick={renderProps.onClick}
                disabled={renderProps.disabled}
                title={'Sign In With Google'}
                theme={'bordered'}
                customClass={'gplus'}
              />
            </div>
          )}
          onSuccess={() => {}}
          onFailure={() => {}}
          cookiePolicy={'single_host_origin'}
        />
        {!this.state.moveToCheckout ? (
          <div className="link-wrapper">
            <a href="/forgotpassword">Forgot Password?</a>
          </div>
        ) : null}
      </div>
    );
  }
}

export default Login;
