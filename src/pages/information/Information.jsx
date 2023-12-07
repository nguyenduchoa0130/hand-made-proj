import { Avatar, Button, Form, message } from 'antd';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './style.scss';
import { useForm } from 'react-hook-form';
import LtFormInput from '../../core/components/lt-form-input';
import { selectors } from '../../stores';
import { UploadOutlined } from '@ant-design/icons';

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
    <div className='container'>
      {contextHolder}
      <div className='py-3'>
        <h2 className='text-center'>THÔNG TIN CÁ NHÂN</h2>
      </div>
      <hr />
      <div className='row'>
        <div className='col-md-4 col-xs-12'>
          <div className='text-center'>
            <Avatar />
            <div className='pt-3'>
              <Button size='large' icon={<UploadOutlined />}>
                Tải ảnh lên
              </Button>
            </div>
          </div>
        </div>
        <div className='col-md-8 col-xs-12 border-left'>
          <Form layout='vertical'>
            <LtFormInput label='Email' name='email' control={control} />
            <LtFormInput label='Mật khẩu' name='password' control={control} />
            <LtFormInput label='Xác nhận mật khẩu' name='passwordConfirm' control={control} />
            <LtFormInput label='Họ và tên' name='name' control={control} />
            <LtFormInput label='Số điện thoại' name='phone' control={control} />
            <LtFormInput label='Địa chỉ' name='address' control={control} />
          </Form>
        </div>
      </div>
    </div>
  );
};

export default Information;
