import React from 'react'
import './style.scss'
import { Button, Form, Input } from 'antd';
import { useNavigate } from 'react-router-dom';

export default function Login() {
    const navigate = useNavigate();
    const onFinish = (values) => {
        console.log('Success:', values);
    };
    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };
    return (
        <div className='login'>
            <div>
                <h2 className='title'>Đăng Nhập</h2>
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
                        name="username"
                        rules={[
                            {
                                required: true,
                                type: 'email',
                                message: 'Vui lòng nhập đúng email!',
                            },
                        ]}
                    >
                        <Input />
                    </Form.Item>

                    <Form.Item
                        label="Mật Khẩu"
                        name="password"
                        rules={[
                            {
                                required: true,
                                message: 'Vui lòng nhập mật khẩu!',
                            },
                        ]}
                    >
                        <Input.Password />
                    </Form.Item>

                    <Form.Item
                        wrapperCol={{
                            offset: 8,
                            span: 16,
                        }}
                    >
                        <div style={{ display: 'flex' }}>
                        <Button type="primary" htmlType="submit" style={{ marginRight: '10px' }} >
                                Đăng Nhập
                            </Button>
                            <Button type="dashed" onClick={() => navigate('/register')} >
                                Đăng Ký
                            </Button>
                            
                        </div>

                    </Form.Item>
                </Form>
            </div>

        </div>
    )
}
