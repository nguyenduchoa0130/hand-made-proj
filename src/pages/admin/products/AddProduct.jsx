import { Form, Modal, Upload } from 'antd';
import React from 'react';
import LtFormInput from '../../../core/components/lt-form-input';

const AddProduct = ({
  control,
  errors,
  fileList,
  handleChange,
  handlePreview,
  previewOpen,
  previewImage,
  previewTitle,
  handleCancel,
}) => {
  const uploadButton = (
    <div>
      <div
        style={{
          marginTop: 8,
        }}>
        Chọn ảnh
      </div>
    </div>
  );

  return (
    <>
      <Form layout='vertical'>
        <LtFormInput
          label='Tên sản phẩm'
          control={control}
          name='name'
          placeholder='Tên sản phẩm'
          error={errors.ten_chi_nhanh}
        />
        <LtFormInput
          label='Loại sản phẩm'
          control={control}
          name='type'
          placeholder='Loại sản phẩm'
          error={errors.duong}
        />
        <Upload
          action='https://run.mocky.io/v3/435e224c-44fb-4773-9faf-380c5e6a2188'
          listType='picture-card'
          fileList={fileList}
          onPreview={handlePreview}
          onChange={handleChange}>
          {fileList?.length >= 8 ? null : uploadButton}
        </Upload>
        <Modal open={previewOpen} title={previewTitle} footer={null} onCancel={handleCancel}>
          <img
            alt='example'
            style={{
              width: '100%',
            }}
            src={previewImage}
          />
        </Modal>
        <LtFormInput
          label='Giá'
          control={control}
          name='price'
          placeholder='Giá'
          error={errors.thanh_pho}
        />
        <LtFormInput
          label='Số lượng'
          control={control}
          name='countInStock'
          placeholder='Số lượng'
          error={errors.khu_vuc}
        />
      </Form>
    </>
  );
};

export default AddProduct;
