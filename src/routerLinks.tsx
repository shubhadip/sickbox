import React from 'react';
import Loadable from 'react-loadable';
import Home from './components/home/Home';
import Contact from './components/contacts/Contact';

const loading = () => <div>Loading...</div>;

const About = Loadable({
  loader: () => import('./components/about/About'),
  loading,
  modules: ['./components/about/About']
});

export default [
  {
    component: Home,
    path: '/',
    exact: true
  },
  {
    component: About,
    path: '/about'
  },
  {
    component: Contact,
    path: '/contact'
  }
];
