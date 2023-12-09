import React, { useEffect, useState } from 'react';
import banner1 from '../../assets/img/Banner-1.png';
import banner2 from '../../assets/img/Banner-2.png';
import './style.scss';
import { useDispatch } from 'react-redux';
import { actions } from '../../stores';
import { Button, Empty, message } from 'antd';
import ProductTypesService from '../../shared/services/product-types.service';
import { NavLink } from 'react-router-dom';
import { ShopOutlined } from '@ant-design/icons';

const Home = () => {
  const dispatch = useDispatch();
  const [productTypes, setProductTypes] = useState([]);
  const [messageApi, contextHolder] = message.useMessage();

  useEffect(() => {
    const getProductTypes = async () => {
      try {
        dispatch(actions.showLoading());
        const productTypes = await ProductTypesService.getAll();
        setProductTypes(productTypes);
      } catch (error) {
        messageApi(error?.response?.data?.message || error.message);
      } finally {
        dispatch(actions.hideLoading());
      }
    };

    getProductTypes();
  }, []);
  return (
    <div className='home'>
      {contextHolder}
      <div className='banner'>
        <div>
          <img src={banner1} alt='banner' />
        </div>
        <div>
          <img src={banner2} alt='banner' />
          <img src={banner2} alt='banner' />
        </div>
      </div>
      <div className='container-fluid py-3'>
        <h1 className='text-center text-uppercase'>danh mục sản phẩm</h1>
        <div className='flex ai-center jc-center'>
          <img src='/images/divider.png' alt='Divider' />
        </div>
        <div className='py-2'>
          {productTypes.length ? (
            <>
              <div className='list-product-types'>
                {productTypes.map((productType) => (
                  <div key={productType._id} className='product-type'>
                    <div className='product-type-overlap'>
                      <NavLink to={`/cua-hang?productType=${productType._id}`} className='w-100'>
                        <Button
                          size='large'
                          className='product-type-overlap-button w-100'
                          icon={<ShopOutlined />}>
                          Mua ngay
                        </Button>
                      </NavLink>
                    </div>
                    <img src={productType.imageUrl} alt={productType.name} />
                    <h5>{productType.name}</h5>
                  </div>
                ))}
              </div>
            </>
          ) : (
            <div className='flex ai-center jc-center'>
              <Empty description='Danh sách loại sản phẩm trống' />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Home;
