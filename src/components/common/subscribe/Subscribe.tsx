import * as React from 'react';
import { hot } from 'react-hot-loader';
import Button from './../Button/Button';
import TextInput from './../TextInput/TextInput';
import './subscribe.scss';

interface IState {
  email: string;
}

class Subscribe extends React.Component<any, IState> {
  constructor(props) {
    super(props);
    this.state = {
      email: ''
    };
  }

  handleClick() {}
  handleChange() {}

  render() {
    return (
      <section className="subscribe-wrapper">
        <h1>Health Tips & Discounts</h1>
        <p className="desc">
          Subscribe to our newsletter to get discounts and tips to stay healthy.{' '}
        </p>
        <article>
          <TextInput
            value={this.state.email}
            onChange={() => this.handleChange}
            placeholder={'your@email.com'}
          />
          <Button title={'Subscribe'} onClick={() => this.handleClick} />
        </article>
      </section>
    );
  }
}

export default hot(module)(Subscribe);
