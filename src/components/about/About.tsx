import * as React from 'react';
import { hot } from 'react-hot-loader';
import './about.scss';
interface Iprops {
  isMobileDevice?: boolean;
}

class About extends React.Component<any, any> {
  constructor(props: Iprops) {
    super(props);
  }

  handleClick = () => {
    console.log('tett');
  };

  componentDidMount() {
    console.log('I mounted');
  }
  render() {
    return (
      <div className="about-container">
        <p> I am About</p>
        <button onClick={this.handleClick}>Click Me</button>
        <a href="/">Home</a>
      </div>
    );
  }
}

export default hot(module)(About);
