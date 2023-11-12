import React, { useState } from 'react'
import './style.scss'
import AvatarIcon from '../../assets/img/avatar-2.png'
import { Avatar, message } from 'antd'
import { Button, Form, Input } from 'antd';
import { authService } from '../../shared/services/auth-service';
export default function ChangePassword() {
    const [messageApi, contextHolder] = message.useMessage();
    const userInfo = JSON.parse(localStorage.getItem('user'));

    const onFinish = (values) => {
        authService.changePass(values).then((data) => {
            console.log(data)
            messageApi.open({
                type: 'success',
                content: 'Cập nhật thành công',
            });
        }).catch(err => messageApi.open({
            type: 'error',
            content: err.response.data.message,
        }));
    };
    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };
    return (
        <div className='information'>
            {contextHolder}
            <h2 className='title'>Đổi Mật Khẩu</h2>
            <div className='information-content'>
                <div>
                    <Avatar src={AvatarIcon} style={{ width: 300, height: 300 }} />
                </div>
                <div>
                    <Form
                        name="basic"
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
                        autoComplete="off"
                    >
                        <Form.Item
                            label="Email"
                            name="email"
                            initialValue={userInfo.email}
                            rules={[
                                {
                                    required: true,
                                    type: 'email',
                                    message: 'Vui lòng nhập đúng email!',
                                },
                            ]}
                        >
                            <Input size='large' style={{ width: 500 }} disabled/>
                        </Form.Item>

                        <Form.Item
                            label="Mật Khẩu Cũ"
                            name="oldPassword"
                            rules={[
                                {
                                    required: true,
                                    message: 'Vui lòng nhập mật khẩu!',
                                },
                            ]}
                        >
                            <Input.Password size='large' style={{ width: 500 }} />
                        </Form.Item>
                        <Form.Item
                            label="Mật Khẩu Mới"
                            name="newPassword"
                            rules={[
                                {
                                    required: true,
                                    message: 'Vui lòng nhập mật khẩu!',
                                },
                            ]}
                        >
                            <Input.Password size='large' style={{ width: 500 }} />
                        </Form.Item>
                        <Form.Item
                            wrapperCol={{
                                offset: 8,
                                span: 16,
                            }}
                        >
                            <Button type="primary" size='large' htmlType="submit" style={{ marginRight: '10px' }} >
                                Cập Nhật
                            </Button>
                        </Form.Item>
                    </Form>
                </div>
            </div>

        </div>
    )
}
