import * as React from 'react';
import { hot } from 'react-hot-loader';
import './header.scss';

interface Iprops {
  isMobileDevice?: boolean;
}

class Header extends React.Component<any, any> {
  constructor(props: Iprops) {
    super(props);
  }

  componentDidMount() {}

  render() {
    return (
      <header className="header-container">
        <div className="container">
          <div className="row wrapper">
            <div className="col-sm-6 header-container_logo">
              <span><i>SickDay Box</i></span>
            </div>
            <div className="col-sm-6 header-container_cart-icon"></div>
          </div>
        </div>
      </header>
    );
  }
}

export default hot(module)(Header);
