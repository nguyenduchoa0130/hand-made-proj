import { PlusOutlined } from '@ant-design/icons';
import { Button, message } from 'antd';
import React, { useEffect, useMemo, useState } from 'react';
import { useDispatch } from 'react-redux';
import DynamicTable from '../../../core/components/dynamic-table/DynamicTable';
import { ProductsService } from '../../../shared/services/products.service';
import { actions } from '../../../stores';
import FormModal from '../../../core/components/form-modal';
import AddProduct from './AddProduct';

const Products = () => {
  const [isCreate, setIsCreate] = useState(false);
  const [products, setProducts] = useState([]);
  const tableColumns = useMemo(() => {
    return [
      {
        title: '',
        dataIndex: '',
      },
    ];
  }, []);
  const [messageApi, contextHolder] = message.useMessage();
  const dispatch = useDispatch();

  useEffect(() => {
    const getAllProducts = async () => {
      try {
        dispatch(actions.showLoading());
        const products = await ProductsService.getAllProducts();
        setProducts(products);
      } catch (error) {
        messageApi.error(error.message);
      } finally {
        dispatch(actions.hideLoading());
      }
    };

    getAllProducts();
  }, []);

  return (
    <>
      {contextHolder}
      <div className='d-flex justify-content-start align-items-center'>
        <Button
          type='primary'
          size='large'
          icon={<PlusOutlined />}
          onClick={() => setIsCreate(true)}>
          Thêm sản phẩm
        </Button>
      </div>
      <div className='pt-3'>
        <DynamicTable cols={tableColumns} dataSrc={products} hasFilters />
      </div>
      <FormModal
        width={'50vw'}
        isOpen={isCreate}
        title='Thêm Sản Phẩm'
        okBtnText='Tạo'
        cancelBtnText='Huỷ'
        onCancel={() => setIsCreate(false)}>
        <AddProduct />
      </FormModal>
    </>
  );
};

export default Products;
