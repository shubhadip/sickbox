import * as React from 'react';
import { hot } from 'react-hot-loader';
import './contact.scss';

interface Iprops {
  isMobileDevice?: boolean;
}

class Contact extends React.Component<any, any> {
  constructor(props: Iprops) {
    super(props);
  }

  render() {
    return (
      <div className="contact-container">
        <p>I am Contact Component</p>
        <a href="/about">About</a>
        <a href="/">Home</a>
      </div>
    );
  }
}

export default hot(module)(Contact);
