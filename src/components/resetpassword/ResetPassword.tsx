import React from 'react';
import './ResetPassword.scss';
import { REQUIRED_VALIDATIONS } from './../../constants';
import TextInput from '../common/TextInput/TextInput';
import Button from './../common/Button/Button';

interface Iprops {}

interface Istate {
  password: string;
}

class Login extends React.Component<Iprops, Istate> {
  private passwordInput: React.RefObject<TextInput>;

  constructor(props) {
    super(props);
    this.state = {
      password: ''
    };
    this.passwordInput = React.createRef<TextInput>();
  }

  handleFieldChange = (fieldName, e) => {
    const value = e;
    this.setState({
      ...this.state,
      ...{ [fieldName]: value }
    });
  };

  handleSubmit = () => {
    if (this.passwordInput.current?.isValid(true)) {
      const name = this.passwordInput.current?.getValue();
      console.log(name);
    }
  };

  renderLogin = () => {
    return (
      <>
        <h4 className="header">Reset password?</h4>
        <div>
          <TextInput
            ref={this.passwordInput}
            customClass={'name-input'}
            validations={REQUIRED_VALIDATIONS('Password')}
            label={'New Password'}
            value={this.state.password}
            onChange={e => this.handleFieldChange('password', e)}
            showLabel={true}
          />
          <Button
            customClass={'auth-submit'}
            title={'Reset Password'}
            onClick={this.handleSubmit}
            theme={'orange'}
          />
          <div className="signup-text">
            Have an account <a href="/login">Sign In?</a>
          </div>
        </div>
      </>
    );
  };

  render() {
    return (
      <div>
        <div className="loginWrapper">{this.renderLogin()}</div>
      </div>
    );
  }
}

export default Login;
