import React from 'react'
import './style.scss'
import cardImg from '../../../assets/img/card.png'

export default function CardItem() {
    return (
        <div className='card'>
          <img src={cardImg} alt='card'/> 
          <div className='card-content'>
            <div>Dụng cụ cơ bản chỉ Airo + ...</div>
            <div>111.000đ</div>
          </div>
        </div>
    )
}
