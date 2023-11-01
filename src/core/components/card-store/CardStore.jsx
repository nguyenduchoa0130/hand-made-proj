import React from 'react';
import './style.scss';
import StoreIcon from '../../../assets/icon/storeIcon.svg'
import { Button, Rate } from 'antd';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addProduct } from '../../../stores/global/global.actions';

const CardStore = ({itemCard}) => {
    const navigate = useNavigate();
    const dispatch = useDispatch()
    const add = () =>{
        dispatch(addProduct({...itemCard,number:1}));
    }

    return <div className='card-store' >
        <img src={itemCard.img} alt="abc" onClick={() => navigate(`/detail/1`)} />
        <div className='card-content'>
            <div className='title' onClick={() => navigate(`/detail/1`)} >{itemCard.title}</div>
            <hr />
            <div className='price'><span>{itemCard.newPrice.toLocaleString('en-US')}đ</span><span>{itemCard.oldPrice.toLocaleString('en-US')}đ</span></div>
            <Rate disabled defaultValue={4} />
            <div className='button-container'>
                <Button type="primary" className='button-store' onClick={add}>
                    <img src={StoreIcon} alt='' />
                </Button>
            </div>
        </div>
    </div>
};

export default CardStore;
