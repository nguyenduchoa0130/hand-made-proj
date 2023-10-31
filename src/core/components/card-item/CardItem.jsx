import React from 'react'
import './style.scss'
import cardImg from '../../../assets/img/card.png'
import { useNavigate } from 'react-router-dom'

export default function CardItem() {
  const navigate = useNavigate()
    return (
        <div className='card' onClick={()=>navigate(`/detail/1`)}>
          <img src={cardImg} alt='card'/> 
          <div className='card-content'>
            <div>Dụng cụ cơ bản chỉ Airo + ...</div>
            <div>111.000đ</div>
          </div>
        </div>
    )
}
