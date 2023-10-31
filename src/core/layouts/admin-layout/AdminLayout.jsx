import {
  BookOutlined,
  DiffOutlined,
  FileImageOutlined,
  GiftOutlined,
  HomeOutlined,
  LoginOutlined,
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UserOutlined,
} from '@ant-design/icons';
import { Button, Layout, Menu, Tooltip, Typography } from 'antd';
import { useEffect, useState } from 'react';
import { NavLink, Outlet, useLocation } from 'react-router-dom';

const menuItems = [
  {
    path: '',
    label: 'Dashboard',
    activeKey: 'admin',
    icon: <HomeOutlined />,
  },
  {
    path: 'users',
    label: 'Tài khoản',
    activeKey: 'users',
    icon: <UserOutlined />,
  },
  {
    path: 'orders',
    label: 'Đơn hàng',
    activeKey: 'orders',
    icon: <DiffOutlined />,
  },
  {
    path: 'products',
    label: 'Sản phẩm',
    activeKey: 'products',
    icon: <BookOutlined />,
  },
  {
    path: 'carousels',
    label: 'Quảng cáo',
    activeKey: 'carousels',
    icon: <FileImageOutlined />,
  },
  {
    path: 'coupons',
    label: 'Khuyến mãi',
    activeKey: 'coupons',
    icon: <GiftOutlined />,
  },
];

const AdminLayout = () => {
  const [isCollapsed, setIsCollapsed] = useState(true);
  const [currentPage, setCurrentPage] = useState('admin');
  const location = useLocation();

  useEffect(() => {
    const segment = location.pathname.split('/').pop();
    setCurrentPage(segment);
  }, [location.pathname]);

  return (
    <>
      <div className='vh-100'>
        <Layout hasSider className='bg-white h-100'>
          <Layout.Sider
            trigger={null}
            collapsible
            collapsed={isCollapsed}
            className='bg-transparent h-100 border-right'>
            <div className='pt-3 h-100'>
              <div className='flex ai-center jc-center pb-2'>
                <Tooltip title='Menu' placement='right' arrow={true}>
                  <Button
                    type={!isCollapsed ? 'primary' : 'default'}
                    danger={!isCollapsed}
                    onClick={() => setIsCollapsed(!isCollapsed)}>
                    {isCollapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
                  </Button>
                </Tooltip>
              </div>
              <Menu mode='inline' className='px-2'>
                {menuItems.map((item, idx) => (
                  <Menu.Item
                    key={`menu-item-${idx}`}
                    className={currentPage === item.activeKey ? 'ant-menu-item-selected' : ''}>
                    <NavLink to={item.path} className='flex ai-center'>
                      {item.icon}
                      <span>{item.label}</span>
                    </NavLink>
                  </Menu.Item>
                ))}
              </Menu>
            </div>
          </Layout.Sider>
          <Layout.Content>
            <div className='h-100'>
              <div className='py-2 px-4 border-bottom flex ai-center jc-between pr-5'>
                <Typography.Title className='text-uppercase m-0'>{currentPage}</Typography.Title>
                <Tooltip title='Đăng xuất' arrow={true}>
                  <Button type='primary' danger>
                    <LoginOutlined />
                  </Button>
                </Tooltip>
              </div>
              <div className='p-4'>
                <Outlet />
              </div>
            </div>
          </Layout.Content>
        </Layout>
      </div>
    </>
  );
};

export default AdminLayout;
