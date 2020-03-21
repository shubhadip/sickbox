import React from 'react';
import { renderRoutes } from 'react-router-config';
import Routes from './routerLinks';
import Header from './../components/header/header';
import Footer from './../components/footer/footer';

export const routeMap = () => {
  return (
    <main>
      <Header />
      {renderRoutes(Routes)}
      <Footer />
    </main>
  );
};