import React from 'react';
import { renderRoutes } from 'react-router-config';
import { hot } from 'react-hot-loader';
import { fetchCartDetails } from './../actions/cart_actions';
import { connect } from 'react-redux';
import Routes from './routerLinks';
import Header from './../components/header/header';
import Footer from './../components/footer/footer';
// import ErrorBoundary from '../components/errorBoundary/ErrorBoundary';

class RouteMap extends React.Component<any, any> {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchCartDetails();
  }

  render() {
    return (
        <main>
          <Header />
          {renderRoutes(Routes as any)}
          <Footer />
        </main>
    );
  }
}

export default hot(module)(connect(null, { fetchCartDetails })(RouteMap));
