import * as React from 'react';
import { hot } from 'react-hot-loader';
import './footer.scss';

interface Iprops {
  isMobileDevice?: boolean;
}

class Footer extends React.Component<any, any> {
  constructor(props: Iprops) {
    super(props);
  }

  componentDidMount() {}

  render() {
    return (
      <div className="footer-container">
        <p>I am Footer Component</p>
      </div>
    );
  }
}

export default hot(module)(Footer);
