import React from 'react';
import Loadable from 'react-loadable';
import Home from './../components/home/Home';
import { fetchAboutData } from '../helpers/loadData';
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
    import(/* webpackChunkName: 'Contact' */ './../components/cart/Cart'),
  loading,
  modules: ['./../components/cart/Cart'],
  webpack: () => [(require as any).resolveWeak('./../components/cart/Cart')]
});

export default [
  {
    component: Home,
    path: '/',
    exact: true,
    loadData: fetchAboutData
  },
  {
    component: About,
    path: '/about'
  },
  {
    component: Contact,
    path: '/contact'
  },
  {
    component: Product,
    path: '/p/:id'
  },
  {
    component: Cart,
    path: '/cart'
  },
  {
    component: PageNotFound,
    path: '*'
  }
];
