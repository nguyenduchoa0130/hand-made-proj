import React from 'react';
import { useRoutes } from 'react-router-dom';
import Footer from './core/layouts/footer';
import Header from './core/layouts/header';
import LoadingSpinner from './core/layouts/loading-spinner';
import Home from './pages/home';

const App = () => {
  const routes = useRoutes([
    {
      path: '',
      element: <Home />,
    },
  ]);

  return (
    <>
      <Header />
      <main>{routes}</main>
      <Footer />
      <LoadingSpinner />
    </>
  );
};

export default App;
