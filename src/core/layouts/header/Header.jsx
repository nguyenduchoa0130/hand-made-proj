import React from 'react';
import Logo from '../../../assets/img/logo.svg'
import SearchIcon from '../../../assets/icon/searchIcon.svg'
import BagIcon from '../../../assets/icon/bagIcon.svg'
import LogoutIcon from '../../../assets/icon/logoutIcon.svg'
import './style.scss'
import { Button } from 'antd';
import { useNavigate } from 'react-router-dom';
const Header = () => {
  const navigate = useNavigate()
  const handleNavigate = (direction) => {
    navigate(direction)
  }
  return (
    <>
      <header>
        <img src={Logo} alt='logo' style={{ width: '210px', height: '150px' }} />
        <div className='header-container'>
          <div className='up'>
            <div className='input'>
              <input placeholder='Tìm kiếm tại đây ...' />
              <div className='incon-search'>
                <img src={SearchIcon} alt='logo' />
              </div>
            </div>
            <div className='icon-up' onClick={() => handleNavigate('/order')}>
              <img src={BagIcon} alt='logo' />
            </div>
            <div className='icon-up'>
              <img src={LogoutIcon} alt='logo' />
            </div>
          </div>
          <div className='down'>
            <Button type="primary" size={'large'} onClick={() => handleNavigate('/')}>Trang chủ</Button>
            <Button type="primary" size={'large'} onClick={() => handleNavigate('/store')}>Cửa hàng</Button>
            <Button type="primary" size={'large'} onClick={() => handleNavigate('/intro')}>Giới thiệu</Button>
            <Button type="primary" size={'large'}>Mã giảm giá</Button>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
