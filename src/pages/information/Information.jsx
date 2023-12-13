import { UploadOutlined, UserOutlined } from '@ant-design/icons';
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
      name: userInfo.name,
      phone: userInfo.phone,
      address: userInfo.address,
    });
  }, []);

  return (
    <div className='container h-100 pb-5'>
      {contextHolder}
      <div className='py-3'>
        <h2 className='text-center'>THÔNG TIN CÁ NHÂN</h2>
      </div>
      <hr />
      <div className='text-center'>
        <Avatar size={128} icon={<UserOutlined />} />
        <div className='pt-3'>
          <Button size='large' icon={<UploadOutlined />}>
            Tải ảnh lên
          </Button>
        </div>
      </div>
      <Form layout='vertical'>
        <LtFormInput label='Email' name='email' control={control} placeholder='Email' />
        <LtFormInput label='Mật khẩu' name='password' control={control} placeholder='Mật khẩu' />
        <LtFormInput
          label='Xác nhận mật khẩu'
          name='passwordConfirm'
          control={control}
          placeholder='Xác nhận mật khẩu'
        />
        <LtFormInput label='Họ và tên' name='name' control={control} placeholder='Họ và tên' />
        <LtFormInput
          label='Số điện thoại'
          name='phone'
          control={control}
          placeholder='Số điện thoại'
        />
        <LtFormInput label='Địa chỉ' name='address' control={control} placeholder='Địa chỉ' />
        <div className='form-group text-center'>
          <Button size='large' type='primary'>
            Cập Nhật Thông Tin
          </Button>
        </div>
      </Form>
    </div>
  );
};

export default Information;
