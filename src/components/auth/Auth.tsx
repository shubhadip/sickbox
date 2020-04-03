import * as React from 'react';
import { hot } from 'react-hot-loader';
import { connect } from 'react-redux';
import './auth.scss';
import Button from './../common/Button/Button';
import Modal from '../common/modal/Modal';
import TextInput from '../common/TextInput/TextInput';

interface IProps {
  isMobileDevice?: boolean;
  onClose: () => void;
}

interface IState {
  showLogin?: boolean;
  showSignUp?: boolean;
  showForgotPassword?: boolean;
  email?: string;
}

const modalHeaders = {
  'forgot-password': 'Forgot Password',
  'login-wrapper': 'Login',
  'signup-wrapper': 'SignUp'
};

const EMAIL_VALIDATIONS = [
  { name: 'required', message: 'Please enter your email.' },
  {
    name: 'email',
    message: 'Oh. Looks like that email is not valid. Check again?'
  }
];

class Auth extends React.Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);
    this.state = {
      showForgotPassword: false,
      showLogin: true,
      showSignUp: false,
      email: ''
    };
  }

  toggleAuthModal = () => {
    this.props.onClose();
  };

  handleSubmit = () => {
    console.log('submit called');
  };

  renderLogin = () => {
    return (
      <div>
        <TextInput
          customClass={'email-input'}
          validations={EMAIL_VALIDATIONS}
          placeholder={'Email'}
          label={'Email'}
          value={this.state.email}
        />
      </div>
    );
  };
  render() {
    const customParentClass = this.state.showForgotPassword
      ? 'forgot-password'
      : this.state.showLogin
      ? 'login-wrapper'
      : 'signup-wrapper';
    const customHeaderClass = this.state.showForgotPassword
      ? 'header-forgot-password'
      : this.state.showLogin
      ? 'header-login-wrapper'
      : 'header-signup-wrapper';
    const header = modalHeaders[customParentClass];
    return (
      <>
        <Modal
          customClass={customParentClass}
          isCloseOnOutSideClick={false}
          onClose={this.toggleAuthModal}
          position={'center'}
          header={header}
          customHeaderClass={customHeaderClass}
          isShowCloseIcon={true}
        >
          {this.state.showLogin ? <div>{this.renderLogin()}</div> : null}
          {this.state.showSignUp ? <div>I am Signup</div> : null}
          {this.state.showForgotPassword ? (
            <div>I am ForgotPassword</div>
          ) : null}
          <Button
            customClass={'auth-submit'}
            title={'Continue'}
            onClick={this.handleSubmit}
          />
        </Modal>
      </>
    );
  }
}

function mapStateToProps(state: IState) {
  return {};
}
export default hot(module)(connect(mapStateToProps, {})(Auth));
