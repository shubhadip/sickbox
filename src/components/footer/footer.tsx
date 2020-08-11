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
        <section className="container content">
          <section className="container order">
            <div>
              <p className="heads">Customer Service</p>
              <ul className="values">
                <li>Contact Us</li>
                <li>Track Order</li>
                <li>Cancel Order</li>
              </ul>
            </div>
          </section>
          <section className="container company">
            <div>
              <p className="heads">Company</p>
              <ul className="values">
                <li>About Us</li>
                <li>Terms & Conditions</li>
                <li>Blog</li>
              </ul>
            </div>
          </section>
          <section className="container social">
            <div>
              <p className="heads">Connect With Us</p>
              <ul className="values">
                <li>
                  <i className="icon_facebook" />
                </li>
                <li>
                  <i className="icon_twitter" />
                </li>
                <li>
                  <i className="icon_instagram_new" />
                </li>
                <li>
                  <i className="icon_snapchat" />
                </li>
                <li>
                  <i className="icon_pinterest" />
                </li>
                <li>
                  <i className="icon_apple" />
                </li>
              </ul>
            </div>
          </section>
        </section>
      </footer>
    );
  }
}

export default hot(module)(Footer);
