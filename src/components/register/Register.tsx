import React from 'react';
import './Register.scss';

import {
  EMAIL_VALIDATIONS,
  MOBILE_VALIDATIONS,
  PASSWORD_VALIDATIONS,
  REQUIRED_VALIDATIONS
} from './../../constants';
import TextInput from '../common/TextInput/TextInput';
import PasswordInput from '../common/Password/PasswordInput';
import MobileInput from '../common/MobileInput/MobileInput';
import Button from './../common/Button/Button';
import { GoogleLogin } from 'react-google-login';

interface Iprops {}

interface Istate {
  email: string;
  password: string;
  mobile: string;
  name: string;
}

class Register extends React.Component<Iprops, Istate> {
  private emailInput: React.RefObject<TextInput>;
  private nameInput: React.RefObject<TextInput>;
  private passwordInput: React.RefObject<PasswordInput>;
  private mobileInput: React.RefObject<MobileInput>;

  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      mobile: '',
      name: ''
    };
    this.emailInput = React.createRef<TextInput>();
    this.nameInput = React.createRef<TextInput>();
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

  handleSubmit = () => {
    if (
      this.emailInput.current?.isValid(true) &&
      this.passwordInput.current?.isValid(true)
    ) {
      const email = this.emailInput.current?.getValue();
      const password = this.passwordInput.current?.getValue();
      console.log(email);
      console.log(password);
    }
  };

  renderRegister = () => {
    return (
      <>
        <h4 className="header">Create your account</h4>
        <div>
          <TextInput
            ref={this.nameInput}
            customClass={'email-input'}
            validations={REQUIRED_VALIDATIONS('Name')}
            label={'Email'}
            value={this.state.name}
            onChange={e => this.handleFieldChange('name', e)}
            showLabel={true}
          />
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
          <MobileInput
            ref={this.mobileInput}
            customClass={'mobile-input'}
            validations={MOBILE_VALIDATIONS}
            label={'Mobile'}
            value={this.state.mobile}
            onChange={e => this.handleFieldChange('mobile', e)}
            showLabel={true}
          />
          <Button
            customClass={'auth-submit'}
            title={'Sign Up'}
            onClick={this.handleSubmit}
            theme={'orange'}
          />
        </div>
      </>
    );
  };

  render() {
    return (
      <div className="registerWrapper">
        {this.renderRegister()}
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
                title={'Sign Up With Google'}
                theme={'bordered'}
                customClass={'gplus'}
              />
            </div>
          )}
          onSuccess={() => {}}
          onFailure={() => {}}
          cookiePolicy={'single_host_origin'}
        />
        <div className="link-wrapper">
          <a href="/login">Sign In?</a>
        </div>
      </div>
    );
  }
}

export default Register;
