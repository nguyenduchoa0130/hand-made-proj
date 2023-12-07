import { Button, Form, Input, message } from 'antd';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { authService } from '../../../shared/services/auth-service';
import './style.scss';
import { useDispatch } from 'react-redux';
import { actions } from '../../../stores';

export default function Login() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [messageApi, contextHolder] = message.useMessage();

  const handleLogin = async (values) => {
    try {
      dispatch(actions.showLoading());
      const data = await authService.signIn(values);
      localStorage.setItem('user', JSON.stringify(data));
      messageApi.open({
        type: 'success',
        content: 'Đăng nhập thành công',
      });
      return navigate('/');
    } catch (error) {
      messageApi.open({
        type: 'error',
        content: error.response?.data?.message || error.message,
      });
    } finally {
      dispatch(actions.hideLoading());
    }
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
            onClick={() => navigate('/dang-ky')}>
            Đăng Ký
          </h2>
        </div>
        <div className='login-form'>
          <Form layout='vertical' name='basic' onFinish={handleLogin} autoComplete='off'>
            <Form.Item
              label='Email'
              name='email'
              rules={[
                {
                  required: true,
                  type: 'email',
                  message: 'Vui lòng nhập email',
                },
              ]}>
              <Input size='large' placeholder='Email' />
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
              <Input.Password size='large' placeholder='Mật khẩu' />
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
