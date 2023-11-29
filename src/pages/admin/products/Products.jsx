import { PlusOutlined } from '@ant-design/icons';
import { Button, Form, message } from 'antd';
import React, { useEffect, useMemo, useState } from 'react';
import { useDispatch } from 'react-redux';
import DynamicTable from '../../../core/components/dynamic-table/DynamicTable';
import { productService } from '../../../shared/services/products.service';
import { actions } from '../../../stores';
import FormModal from '../../../core/components/form-modal';
import AddProduct from './AddProduct';
import { useForm } from 'react-hook-form';
const getBase64 = (file) =>
  new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = (error) => reject(error);
  });
const Products = () => {
  const [isCreate, setIsCreate] = useState(false);
  const [products, setProducts] = useState([]);
  const [previewOpen, setPreviewOpen] = useState(false);
  const [previewImage, setPreviewImage] = useState('');
  const [previewTitle, setPreviewTitle] = useState('');
  const [fileList, setFileList] = useState();
  const handleCancel = () => setPreviewOpen(false);
  const handlePreview = async (file) => {
    if (!file.url && !file.preview) {
      file.preview = await getBase64(file.originFileObj);
    }
    setPreviewImage(file.url || file.preview);
    setPreviewOpen(true);
    setPreviewTitle(file.name || file.url.substring(file.url.lastIndexOf('/') + 1));
  };
  const handleChange = ({ fileList: newFileList }) => setFileList(newFileList);

  const {
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: {
      name: '',
      type: '',
      price: '',
      countInStock: '',
    },
  });
  const tableColumns = useMemo(() => {
    return [
      {
        title: 'Tên Sản Phẩm',
        dataIndex: 'name',
        key: 'name',

      },
      {
        title: 'Hinh ảnh',
        dataIndex: 'image',
        key: 'image',
        render: (text) => (
          <div>
            <img src={text[0][0]} alt='hinh' width={100} height={100} />
          </div>
        ),
      },
      {
        title: 'Mô Tả',
        dataIndex: 'description',
        key: 'description',
      },
      {
        title: 'Số Lượng',
        dataIndex: 'countInStock',
        key: 'countInStock',
      },
      {
        title: 'Giá',
        dataIndex: 'price',
        key: 'price',
      }
    ];
  }, []);
  const [messageApi, contextHolder] = message.useMessage();
  const dispatch = useDispatch();

  useEffect(() => {
    const getAllProducts = async () => {
      try {
        dispatch(actions.showLoading());
        const products = await productService.getAllProducts({ limit: 2, page: 0, sort: 'asc', filter: 'discount' });
        setProducts(products.productData);
      } catch (error) {
        messageApi.error(error.message);
      } finally {
        dispatch(actions.hideLoading());
      }
    };
    getAllProducts();
  }, []);

  const createNewProduct = async (formValue) => {
    console.log({ ...formValue, fileList })

    const formData = new FormData();
    for (const field in formValue) {
      formData.append(field, formValue[field])
    }
    for (const field of fileList) {
      formData.append("image", fileList[field])
    }

    try {
      const products = await productService.createProducts(formData);
      console.log(products)
    } catch (error) {
      messageApi.error(error.message);
    };
  }
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
        onCancel={() => setIsCreate(false)}
        onSubmit={handleSubmit(createNewProduct)}>
        <AddProduct control={control} errors={errors} handleCancel={handleCancel} previewTitle={previewTitle} previewImage={previewImage} previewOpen={previewOpen} fileList={fileList} handleChange={handleChange} handlePreview={handlePreview} />
      </FormModal>
    </>
  );
};

export default Products;
