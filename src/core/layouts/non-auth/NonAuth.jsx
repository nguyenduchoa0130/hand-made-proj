import { ConfigProvider } from 'antd';
import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../footer';
import Header from '../header';
import './styles.scss';

const NonAuth = () => {
  return (
    <>
      <ConfigProvider
        theme={{
          token: {
            colorPrimary: '#74ABFA',
          },
        }}>
        <Header />
        <main id='non-auth-content'>
          <Outlet />
        </main>
        <Footer />
      </ConfigProvider>
    </>
  );
};

export default NonAuth;
