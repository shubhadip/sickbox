import React from 'react';
import './ForgotPassword.scss';
import { EMAIL_VALIDATIONS } from './../../constants';
import TextInput from '../common/TextInput/TextInput';
import Button from './../common/Button/Button';

interface Iprops {}

interface Istate {
  email: string;
}

class ForgotPassword extends React.Component<Iprops, Istate> {
  private emailInput: React.RefObject<TextInput>;

  constructor(props) {
    super(props);
    this.state = {
      email: ''
    };
    this.emailInput = React.createRef<TextInput>();
  }

  handleFieldChange = (fieldName, e) => {
    const value = e;
    this.setState({
      ...this.state,
      ...{ [fieldName]: value }
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    if (this.emailInput.current?.isValid(true)) {
      const email = this.emailInput.current?.getValue();
      console.log(email);
    }
  };

  renderLogin = () => {
    return (
      <>
        <h4 className="header">Forgot password?</h4>
        <p className="desc">
          Enter the email address associated with your account and we will send
          you a link to reset your password.
        </p>
        <form>
          <TextInput
            ref={this.emailInput}
            customClass={'email-input'}
            validations={EMAIL_VALIDATIONS}
            label={'Email Address'}
            value={this.state.email}
            onChange={e => this.handleFieldChange('email', e)}
            showLabel={true}
          />
          <Button
            customClass={'auth-submit'}
            title={'Request Reset Password'}
            onClick={this.handleSubmit}
            theme={'orange'}
          />
          <div className="signup-text">
            Don't Have an account? <a href="/register">Sign Up?</a>
          </div>
        </form>
      </>
    );
  };

  render() {
    return (
      <div>
        <div className="forgotWrapper">{this.renderLogin()}</div>
      </div>
    );
  }
}

export default ForgotPassword;
