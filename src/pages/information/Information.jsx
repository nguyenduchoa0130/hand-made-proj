import { UploadOutlined } from '@ant-design/icons';
import { Avatar, Button, Form, message } from 'antd';
import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import LtFormInput from '../../core/components/lt-form-input';
import { selectors } from '../../stores';
import './style.scss';

const Information = () => {
  const dispatch = useDispatch();
  const [messageApi, contextHolder] = message.useMessage();
  const userInfo = useSelector(selectors.selectUserInfo);

  console.log(userInfo);

  const {
    reset,
    watch,
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      email: '',
      password: '',
      passwordConfirm: '',
      name: '',
      phone: '',
      address: '',
    },
  });

  useEffect(() => {
    reset({
      email: userInfo.email,
      password: '',
      passwordConfirm: '',
      name: userInfo.name,
      phone: userInfo.phone,
      address: userInfo.address,
    });
  }, []);

  return (
    <div className='container h-100'>
      {contextHolder}
      <div className='py-3'>
        <h2 className='text-center'>THÔNG TIN CÁ NHÂN</h2>
      </div>
      <hr />
      <div className='text-center'>
        <Avatar size={128}>A</Avatar>
        <div className='pt-3'>
          <Button size='large' icon={<UploadOutlined />}>
            Tải ảnh lên
          </Button>
        </div>
      </div>
      <Form layout='vertical'>
        <LtFormInput label='Email' name='email' control={control} />
        <LtFormInput label='Mật khẩu' name='password' control={control} />
        <LtFormInput label='Xác nhận mật khẩu' name='passwordConfirm' control={control} />
        <LtFormInput label='Họ và tên' name='name' control={control} />
        <LtFormInput label='Số điện thoại' name='phone' control={control} />
        <LtFormInput label='Địa chỉ' name='address' control={control} />
        <div className='form-group text-center'>
          <Button size='large' type='primary'>
            Cập Nhật Thông Tin{' '}
          </Button>
        </div>
      </Form>
    </div>
  );
};

export default Information;
