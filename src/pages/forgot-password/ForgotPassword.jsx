import React from 'react'
import './style.scss'
import { Button, Form, Input, message } from 'antd';
import { useNavigate } from 'react-router-dom';
import { authService } from '../../shared/services/auth-service';

export default function ForgotPassword() {
    const [messageApi, contextHolder] = message.useMessage();

    const navigate = useNavigate();
    const onFinish = (values) => {
        authService.forgotPass(values).then((data) => {
            messageApi.open({
                type: 'success',
                content: data.message,
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
        <div className='login'>
            {contextHolder}
            <div className='login-container'>
                <div className='login-title'>
                    <h2 className='title active'>Quên Mật Khẩu</h2>
                </div>
                <div className='login-form'>
                    <Form
                        name="basic"
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
                        autoComplete="off"
                    >
                        <Form.Item
                            label="Email"
                            name="email"
                            rules={[
                                {
                                    required: true,
                                    type: 'email',
                                    message: 'Vui lòng nhập đúng email!',
                                },
                            ]}
                        >
                            <Input size='large' />
                        </Form.Item>

                        <Form.Item
                            wrapperCol={{
                                span: 24,
                            }}
                        >
                            <div style={{ textAlign: 'center', marginTop: '20px' }}>
                                <Button type="default" size='large' style={{ marginRight: '10px' }} onClick={() => navigate('/login')}>
                                    Quay lại
                                </Button>
                                <Button type="primary" size='large' htmlType="submit" style={{ marginRight: '10px' }} >
                                    Gửi
                                </Button>
                            </div>
                        </Form.Item>
                    </Form>
                </div>

            </div>

        </div>
    )
}
