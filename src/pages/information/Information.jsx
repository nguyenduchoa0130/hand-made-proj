import { Avatar, Button, Form, Input, message } from 'antd';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import AvatarIcon from '../../assets/img/avatar-2.png';
import { setUser } from '../../stores/global/global.actions';
import './style.scss';

const Information = () => {
  const [isEdit, setIsEdit] = useState(false);
  const [messageApi, contextHolder] = message.useMessage();
  const dispatch = useDispatch();
  const userInfo = JSON.parse(localStorage.getItem('user'));

  const onFinish = (values) => {
    dispatch(setUser(values));
    messageApi.open({
      type: 'success',
      content: 'Cập nhật thành công',
    });
    setIsEdit(false);
  };
  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };
  return (
    <div className='information'>
      {contextHolder}
      <h2 className='title'>Thông tin cá nhân</h2>
      <div className='information-content'>
        <div>
          <Avatar src={AvatarIcon} style={{ width: 300, height: 300 }} />
        </div>
        <div>
          <Form
            name='basic'
            labelCol={{
              span: 8,
            }}
            wrapperCol={{
              span: 16,
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
              initialValue={userInfo.email}
              rules={[
                {
                  required: true,
                  type: 'email',
                  message: 'Vui lòng nhập đúng email!',
                },
              ]}>
              <Input size='large' style={{ width: 500 }} disabled={!isEdit} />
            </Form.Item>

            <Form.Item
              label='Mật Khẩu'
              name='password'
              initialValue={userInfo.password}
              rules={[
                {
                  required: true,
                  message: 'Vui lòng nhập mật khẩu!',
                },
              ]}>
              <Input.Password size='large' style={{ width: 500 }} disabled={!isEdit} />
            </Form.Item>

            <Form.Item
              wrapperCol={{
                offset: 8,
                span: 16,
              }}>
              {isEdit ? (
                <>
                  <div style={{ display: 'flex', justifyContent: 'center' }}>
                    <Button
                      type='primary'
                      size='large'
                      htmlType='submit'
                      style={{ marginRight: '10px' }}>
                      Cập Nhật
                    </Button>
                    <Button type='dashed' size='large' onClick={() => setIsEdit(false)}>
                      Hủy
                    </Button>
                  </div>
                </>
              ) : (
                <>
                  <Button type='primary' size='large' onClick={() => setIsEdit(true)}>
                    Sửa
                  </Button>
                </>
              )}
            </Form.Item>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default Information;
