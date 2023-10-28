import React from 'react';
import './style.scss';
import ImageCard from '../../../assets/img/card-1.png'
import StoreIcon from '../../../assets/icon/storeIcon.svg'
import { Button, Rate } from 'antd';

const CardStore = () => {
    return <div className='card-store'>
        <img src={ImageCard} alt="abc" />
        <div className='card-content'>
            <div className='title'>Bộ nguyên liệu làm thỏ bông (bao gồm kim, khung)</div>
            <hr />
            <div className='price'><span>59.000đ</span><span>6.000.000đ</span></div>
            <Rate disabled defaultValue={4} />
            <div className='button-container'>
                <Button type="primary" className='button-store'>
                    <img src={StoreIcon} alt='' />
                </Button>
            </div>
        </div>
    </div>
};

export default CardStore;
