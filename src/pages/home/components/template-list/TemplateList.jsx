import React from 'react'
import CardItem from '../../../../core/components/card-item/CardItem'
import './style.scss'

export default function TemplateList({item}) {
    return (
        <div className='template-container'>
            <div className='title'>{item.title}</div>
            <div className='template-banner'><img src={item.image} alt='img' /></div>
            <div className='template-content' style={{backgroundColor:item.bgColor}}>
                <div className='template-flex'>
                    <CardItem />
                    <CardItem />
                    <CardItem />
                    <CardItem />
                    <CardItem />
                </div>
                <div className='more-text'>Xem thêm</div>
            </div>
        </div>
    )
}
