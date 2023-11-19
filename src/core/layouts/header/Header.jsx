import { Avatar, Button, Dropdown, message } from 'antd';
import React from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import BagIcon from '../../../assets/icon/bagIcon.svg';
import LogoutIcon from '../../../assets/icon/logoutIcon.svg';
import NoteIcon from '../../../assets/icon/noteIcon.svg';
import SearchIcon from '../../../assets/icon/searchIcon.svg';
import AvatarIcon from '../../../assets/img/avatar-2.png';
import Logo from '../../../assets/img/logo.svg';
import { selectListProduct } from '../../../stores/global/global.selectors';
import './style.scss';

const Header = () => {
  const navigate = useNavigate();
  const [messageApi, contextHolder] = message.useMessage();

  const dataOrders = useSelector(selectListProduct);
  const userInfo = JSON.parse(localStorage.getItem('user'));
  console.log(userInfo);
  const handleNavigate = (direction) => {
    navigate(direction);
  };
  const items = [
    {
      key: '1',
      label: (
        <div
          onClick={() => {
            handleNavigate('/information');
          }}>
          Thông tin cá nhân
        </div>
      ),
    },
    {
      key: '2',
      label: (
        <div
          onClick={() => {
            handleNavigate('/change-password');
          }}>
          Đổi mật khẩu
        </div>
      ),
    },
    {
      key: '3',
      label: (
        <div
          onClick={() => {
            localStorage.removeItem('user');
            handleNavigate('/');
            messageApi.open({
              type: 'success',
              content: 'Đăng xuất thành công',
            });
          }}>
          Đăng xuất
        </div>
      ),
    },
  ];

  return (
    <>
      <header>
        {contextHolder}
        <img src={Logo} alt='logo' style={{ width: '210px', height: '150px' }} />
        <div className='header-container'>
          <div className='up'>
            <div className='input'>
              <input placeholder='Tìm kiếm tại đây ...' />
              <div className='incon-search'>
                <img src={SearchIcon} alt='logo' />
              </div>
            </div>
            {!userInfo ? (
              <>
                <div className='icon-up icon-store' onClick={() => handleNavigate('/order')}>
                  <img src={BagIcon} alt='logo' />
                  <div className='number-order'>{dataOrders.length}</div>
                </div>
                <div className='icon-up' onClick={() => handleNavigate('/login')}>
                  <img src={LogoutIcon} alt='logo' />
                </div>
              </>
            ) : (
              <>
                <div className='icon-up' onClick={() => handleNavigate('/order')}>
                  <img src={BagIcon} alt='logo' />
                </div>
                <div className='icon-up'>
                  <img src={NoteIcon} alt='logo' />
                </div>
                <div className='icon-up'>
                  <Dropdown
                    menu={{
                      items,
                    }}
                    placement='bottom'
                    arrow>
                    <Avatar src={AvatarIcon} size='large' />
                  </Dropdown>
                </div>
              </>
            )}
          </div>
          <div className='down'>
            <Button type='primary' size={'large'} onClick={() => handleNavigate('/')}>
              Trang chủ
            </Button>
            <Button type='primary' size={'large'} onClick={() => handleNavigate('/store')}>
              Cửa hàng
            </Button>
            <Button type='primary' size={'large'} onClick={() => handleNavigate('/intro')}>
              Giới thiệu
            </Button>
            <Button type='primary' size={'large'}>
              Mã giảm giá
            </Button>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
