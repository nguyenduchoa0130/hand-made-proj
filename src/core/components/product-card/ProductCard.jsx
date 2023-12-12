import { InfoCircleOutlined, ShoppingCartOutlined } from '@ant-design/icons';
import { Card, Image, Tooltip } from 'antd';
import React from 'react';
import { NumericFormat } from 'react-number-format';
import './style.scss';
import { NavLink } from 'react-router-dom';

export default function ProductCard({ product }) {
  return (
    <NavLink to={`/chi-tiet-san-pham/${product._id}`}>
      <Card
        style={{
          width: 300,
        }}
        className='product-card'
        cover={<Image alt={product.name} src={product.image[0]} />}>
        <Card.Meta
          title={<div className='text-center text-capitalize'>{product.name}</div>}
          description={
            <>
              <div className='text-center text-success' style={{ fontSize: 18 }}>
                <NumericFormat value={product.price} displayType='text' thousandSeparator=',' />
              </div>
            </>
          }
        />
      </Card>
    </NavLink>
  );
}
