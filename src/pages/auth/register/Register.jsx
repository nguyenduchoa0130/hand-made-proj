import React from 'react';
import './style.scss';
import { Button, Form, Input, message } from 'antd';
import { useNavigate } from 'react-router-dom';
import { authService } from '../../../shared/services/auth-service';
import { useDispatch } from 'react-redux';
import { actions } from '../../../stores';

export default function Register() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [messageApi, contextHolder] = message.useMessage();

  const onFinish = async (values) => {
    try {
      dispatch(actions.showLoading());
      await authService.signUp(values);
      messageApi.open({
        type: 'success',
        content: 'Đăng ký thành công',
      });
      return navigate('/login');
    } catch (error) {
      messageApi.open({
        type: 'error',
        content: error?.response?.data?.message || error.message,
      });
    }
  };

  return (
    <div className='login'>
      {contextHolder}
      <div className='login-container'>
        <div className='login-title'>
          <h2
            className='title'
            style={{ borderTopLeftRadius: '10px' }}
            onClick={() => navigate('/login')}>
            Đăng Nhập
          </h2>
          <h2 className='title active' style={{ borderTopRightRadius: '10px' }}>
            Đăng Ký
          </h2>
        </div>
        <div className='login-form'>
          <Form name='basic' onFinish={onFinish} autoComplete='off' layout='vertical'>
            <Form.Item
              label='Tên'
              name='name'
              rules={[
                {
                  required: true,
                  message: 'Vui lòng nhập tên!',
                },
              ]}>
              <Input size='large' />
            </Form.Item>

            <Form.Item
              label='Email'
              name='email'
              rules={[
                {
                  required: true,
                  type: 'email',
                  message: 'Vui lòng nhập đúng email!',
                },
              ]}>
              <Input size='large' />
            </Form.Item>

            <Form.Item
              label='Mật Khẩu'
              name='password'
              rules={[
                {
                  required: true,
                  message: 'Vui lòng nhập mật khẩu!',
                },
              ]}>
              <Input.Password size='large' />
            </Form.Item>

            <Form.Item
              wrapperCol={{
                span: 24,
              }}>
              <div style={{ textAlign: 'center' }}>
                <Button
                  type='primary'
                  size='large'
                  htmlType='submit'
                  style={{ marginRight: '10px' }}>
                  Đăng Ký
                </Button>
              </div>
            </Form.Item>
          </Form>
        </div>
      </div>
    </div>
  );
}
