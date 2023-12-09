import { InfoCircleOutlined, ShoppingCartOutlined } from '@ant-design/icons';
import { Card, Image, Tooltip } from 'antd';
import React from 'react';
import { NumericFormat } from 'react-number-format';
import './style.scss';

export default function ProductCard({ product }) {
  return (
    <Card
      style={{
        width: 300,
      }}
      cover={<Image alt={product.name} src={product.image[0]} />}
      actions={[
        <Tooltip title='Xem chi tiết'>
          <InfoCircleOutlined style={{ fontSize: 24 }} className='text-success' />
        </Tooltip>,
        <Tooltip title='Thêm vào giỏ hàng'>
          <ShoppingCartOutlined style={{ fontSize: 24 }} className='text-primary' />
        </Tooltip>,
      ]}>
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
  );
}
