import { Button, Form, Input, message } from 'antd';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { authService } from '../../../shared/services/auth-service';
import './style.scss';

export default function Login() {
  const [messageApi, contextHolder] = message.useMessage();

  const navigate = useNavigate();
  const onFinish = (values) => {
    authService
      .signIn(values)
      .then((data) => {
        localStorage.setItem('user', JSON.stringify({ ...data, email: values.email }));
        setTimeout(() => {
          navigate('/');
        }, 1000);
        messageApi.open({
          type: 'success',
          content: 'Đăng nhập thành công',
        });
      })
      .catch((err) =>
        messageApi.open({
          type: 'error',
          content: err.response.data.message,
        }),
      );
  };
  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };
  return (
    <div className='login'>
      {contextHolder}
      <div className='login-container'>
        <div className='login-title'>
          <h2 className='title active' style={{ borderTopLeftRadius: '10px' }}>
            Đăng Nhập
          </h2>
          <h2
            className='title'
            style={{ borderTopRightRadius: '10px' }}
            onClick={() => navigate('/register')}>
            Đăng Ký
          </h2>
        </div>
        <div className='login-form'>
          <Form
            name='basic'
            labelCol={{
              span: 4,
            }}
            wrapperCol={{
              span: 20,
            }}
            style={{
              maxWidth: 600,
            }}
            initialValues={{
              remember: true,
            }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            autoComplete='off'>
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
              <div className='forgot' onClick={() => navigate('/forgot-password')}>
                Quên mật khẩu?
              </div>
              <div style={{ textAlign: 'center' }}>
                <Button
                  type='primary'
                  size='large'
                  htmlType='submit'
                  style={{ marginRight: '10px' }}>
                  Đăng Nhập
                </Button>
              </div>
            </Form.Item>
          </Form>
        </div>
      </div>
    </div>
  );
}
