import { SearchOutlined } from '@ant-design/icons';
import { Button, Empty, Form, Space, message } from 'antd';
import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { useSearchParams } from 'react-router-dom';
import LineIcon from '../../assets/icon/lineIcon.svg';
import BannerImg from '../../assets/img/Banner-1.png';
import LtFormDropdown from '../../core/components/lt-form-dropdown';
import LtFormInput from '../../core/components/lt-form-input';
import ProductCard from '../../core/components/product-card';
import ProductTypesService from '../../shared/services/product-types.service';
import { productService } from '../../shared/services/products.service';
import { actions } from '../../stores';
import './style.scss';

const Store = () => {
  const [products, setProducts] = useState([]);
  const [productTypesOptions, setProductTypesOptions] = useState([]);
  const dispatch = useDispatch();

  const [messageApi, contextHolder] = message.useMessage();
  const [searchParams, setSearchParams] = useSearchParams();

  const { control, handleSubmit, reset } = useForm({
    defaultValues: {
      name: '',
      productTypes: [],
    },
  });

  const getAllProducts = async (filterOptions) => {
    try {
      dispatch(actions.showLoading());
      const products = await productService.getAllProducts(filterOptions);
      setProducts(products.productData);
    } catch (error) {
      messageApi.error(error?.response?.data?.message || error.message);
    } finally {
      dispatch(actions.hideLoading());
    }
  };

  const handleSearchProduct = (formValues) => {
    for (const key of Object.keys(formValues)) {
      if (formValues[key] && formValues[key].toString().trim()) {
        searchParams.set(key, formValues[key].toString().trim());
      } else {
        searchParams.delete(key);
      }
    }
    setSearchParams(searchParams);
  };

  const handleClearSearch = () => {
    reset({ name: '', productTypes: [] });
    for (const key of searchParams.keys()) {
      searchParams.delete(key);
    }
    setSearchParams(searchParams);
  };

  useEffect(() => {
    const getProductTypes = async () => {
      try {
        dispatch(actions.showLoading());
        const productTypes = await ProductTypesService.getAll();
        setProductTypesOptions(productTypes);
      } catch (error) {
        messageApi.error(error?.response?.data?.message || error.message);
      } finally {
        dispatch(actions.hideLoading());
      }
    };

    getProductTypes();
  }, []);

  useEffect(() => {
    console.log('run');
    const name = searchParams.get('name');
    const productTypes = searchParams.get('productTypes');
    reset({ name: name || '', productTypes: productTypes ? productTypes.split(',') : [] });
    getAllProducts({ name, productTypes });
  }, [searchParams]);

  return (
    <div className='store'>
      {contextHolder}
      <div className='banner'>
        <img src={BannerImg} alt='' />
      </div>
      <div className='line-category'>
        <img src={LineIcon} alt='line' />
        <div>Danh Sách Sản Phẩm</div>
        <img src={LineIcon} alt='line' />
      </div>
      <div className='container'>
        <Form layout='vertical' onFinish={handleSubmit(handleSearchProduct)}>
          <div className='row'>
            <div className='col-md-6 cold-xs-12'>
              <LtFormInput
                label='Tên sản phẩm'
                name='name'
                control={control}
                placeholder='Tìm theo tên sản phẩm'
              />
            </div>
            <div className='col-md-6 cold-xs-12'>
              <LtFormDropdown
                isMultiple
                label='Loại sản phẩm'
                name='productTypes'
                control={control}
                placeholder='Loại sản phẩm'
                dropdownOptions={productTypesOptions.map((productType) => ({
                  label: productType.name,
                  value: productType._id,
                }))}
              />
            </div>
          </div>
          <div className='text-center'>
            <Space size='middle'>
              <Button size='large' icon={<SearchOutlined />} type='primary' htmlType='submit'>
                Tìm kiếm
              </Button>
              <Button size='large' htmlType='button' onClick={handleClearSearch}>
                Bỏ lọc
              </Button>
            </Space>
          </div>
        </Form>
      </div>
      <hr />
      <div className='store-body'>
        <div className='body'>
          {products && products.length ? (
            products.map((item) => <ProductCard key={item._id} product={item} />)
          ) : (
            <div className='flex ai-center jc-center'>
              <Empty description='Không tìm thấy sản phẩm nào' />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Store;
