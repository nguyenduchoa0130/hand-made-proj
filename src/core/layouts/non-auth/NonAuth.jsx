import { ConfigProvider } from 'antd';
import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../footer';
import Header from '../header';

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
        <main>
          <Outlet />
        </main>
        <Footer />
      </ConfigProvider>
    </>
  );
};

export default NonAuth;
