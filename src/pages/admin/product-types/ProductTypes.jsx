import { DeleteOutlined, EditOutlined, PlusOutlined, UploadOutlined } from '@ant-design/icons';
import { Button, Form, Image, Space, Upload, message } from 'antd';
import React, { useEffect, useMemo, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import LtDynamicTable from '../../../core/components/lt-dynamic-table';
import LtFormInput from '../../../core/components/lt-form-input';
import LtFormModal from '../../../core/components/lt-form-modal';
import ProductTypesService from '../../../shared/services/product-types.service';
import { actions } from '../../../stores';

const ProductTypes = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [productTypes, setProductTypes] = useState([]);
  const [imageFile, setImageFile] = useState(null);
  const [imageUrl, setImageUrl] = useState(null);

  const dispatch = useDispatch();
  const [messageApi, contextHolder] = message.useMessage();

  const {
    reset,
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({ defaultValues: { name: '' } });

  const handleCloseModal = () => {
    revokeImageUrl();
    reset({ name: '' });
    setIsOpen(false);
  };

  const beforeUploadImage = (file) => {
    const isImage = file.type.startsWith('image/');
    if (!isImage) {
      messageApi.error.warn('Chi cho phép upload hình ảnh');
    }
    return false;
  };

  const revokeImageUrl = () => {
    if (imageUrl) {
      URL.revokeObjectURL(imageUrl);
    }
    setImageFile(null);
    setImageUrl(null);
  };

  const handleUploadImageFile = ({ file }) => {
    revokeImageUrl();
    const imageUrl = URL.createObjectURL(file);
    setImageFile(file);
    setImageUrl(imageUrl);
  };

  const createProductType = async (formValue) => {
    try {
      dispatch(actions.showLoading());
      if (!imageUrl) {
        return messageApi.warning('Vui lòng cung cấp hình ảnh loại sản phẩm');
      }
      const formData = new FormData();
      formData.append('name', formValue.name);
      formData.append('image', imageFile);
      formData.append('imageUrl', imageUrl);
      const newProductType = await ProductTypesService.create(formData);
      setProductTypes([newProductType, ...productTypes]);
      handleCloseModal();
    } catch (error) {
      console.log(error);
      messageApi.error(error?.response?.data?.message || error.message);
    } finally {
      dispatch(actions.hideLoading());
    }
  };

  const columns = useMemo(() => {
    return [
      {
        key: '1',
        title: '#',
        dataIndex: '_id',
        render: (value) => value.slice(-7, -1),
        align: 'center',
      },
      {
        key: '2',
        title: 'Loại sản phẩm',
        dataIndex: 'imageUrl',
        render: (value) => (
          <Image src={value} style={{ width: 120, height: 120, objectFit: 'contain' }} />
        ),
        align: 'center',
      },
      {
        key: '3',
        title: 'Tên',
        dataIndex: 'name',
        render: (value) => <span className='text-capitalize'>{value}</span>,
      },
      {
        key: '4',
        title: null,
        dataIndex: null,
        render: (_, productType) => (
          <Space>
            <Button size='large' type='primary' icon={<EditOutlined />}>
              Cập nhật
            </Button>
            <Button size='large' type='primary' icon={<DeleteOutlined />} danger>
              Xoá
            </Button>
          </Space>
        ),
        align: 'center',
      },
    ];
  }, []);

  useEffect(() => {
    const getProductTypes = async () => {
      try {
        dispatch(actions.showLoading());
        const productTypes = await ProductTypesService.getAll();
        setProductTypes(productTypes);
      } catch (error) {
        messageApi.error(error?.response?.data?.message || error.message);
      } finally {
        dispatch(actions.hideLoading());
      }
    };

    getProductTypes();
  }, []);

  return (
    <>
      <div className='py-2'>
        {contextHolder}
        <Button size='large' type='primary' icon={<PlusOutlined />} onClick={() => setIsOpen(true)}>
          Thêm mới
        </Button>
      </div>
      <LtDynamicTable cols={columns} dataSrc={productTypes} />
      <LtFormModal
        isOpen={isOpen}
        title='Thêm loại sản phẩm'
        onCancel={handleCloseModal}
        okBtnText='Thêm'
        cancelBtnText='Huỷ'
        onSubmit={handleSubmit(createProductType)}>
        <Form name='my-add-product-type-form' layout='vertical'>
          <LtFormInput
            label='Tên sản phẩm'
            name='name'
            control={control}
            error={errors.name}
            placeholder='Nhập loại sản phẩm'
            rules={{ required: 'Tên không được để trống' }}
          />
          {imageUrl && (
            <div className='text-center py-2'>
              <Image src={imageUrl} style={{ width: 120, height: 120, objectFit: 'contain' }} />
            </div>
          )}
          <div className='pt-3 text-center'>
            <Upload
              name='avatar'
              onRemove={revokeImageUrl}
              beforeUpload={beforeUploadImage}
              onChange={handleUploadImageFile}
              showUploadList={false}>
              <Button size='large' icon={<UploadOutlined />}>
                Tải ảnh lên
              </Button>
            </Upload>
          </div>
        </Form>
      </LtFormModal>
    </>
  );
};

export default ProductTypes;
