import React from 'react';
import Loadable from 'react-loadable';
import Home from './../components/home/Home';
import { fetchHomeData, fetchProductData } from '../actions/index';
import PageNotFound from '../components/functional/PageNotFound/PageNotFound';
import Product from './../components/product/Product';

const loading = () => <div>Loading...</div>;

const About = Loadable({
  loader: () =>
    import(/* webpackChunkName: 'About' */ './../components/about/About'),
  loading,
  modules: ['./../components/about/About'],
  webpack: () => [(require as any).resolveWeak('./../components/about/About')]
});

const Contact = Loadable({
  loader: () =>
    import(
      /* webpackChunkName: 'Contact' */ './../components/contacts/Contact'
    ),
  loading,
  modules: ['./../components/contacts/Contact'],
  webpack: () => [
    (require as any).resolveWeak('./../components/contacts/Contact')
  ]
});

const Cart = Loadable({
  loader: () =>
    import(/* webpackChunkName: 'Cart' */ './../components/cart/Cart'),
  loading,
  modules: ['./../components/cart/Cart'],
  webpack: () => [(require as any).resolveWeak('./../components/cart/Cart')]
});

export default [
  {
    component: Home,
    routeName: 'home',
    path: '/',
    exact: true,
    loadData: fetchHomeData
  },
  {
    component: About,
    routeName: 'about',
    path: '/about'
  },
  {
    component: Contact,
    routeName: 'contact',
    path: '/contact'
  },
  {
    component: Product,
    routeName: 'product',
    path: '/p/:id',
    loadData: fetchProductData
  },
  {
    component: Cart,
    routeName: 'cart',
    path: '/cart'
  },
  {
    component: PageNotFound,
    routeName: 'pagenotfound',
    path: '*'
  }
];
