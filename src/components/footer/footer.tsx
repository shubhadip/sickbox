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
      <footer className="footer-container">
        <p>I am Footer Component</p>
      </footer>
    );
  }
}

export default hot(module)(Footer);
