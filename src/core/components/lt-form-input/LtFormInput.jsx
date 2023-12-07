import { Form, Input } from 'antd';
import React from 'react';
import { Controller } from 'react-hook-form';

const LtFormInput = ({
  label,
  error,
  name,
  rules,
  control,
  children,
  placeholder,
  isPassword,
  ...others
}) => {
  return (
    <>
      <Form.Item label={label} validateStatus={error ? 'error' : ''} help={error && error.message}>
        <Controller
          name={name}
          rules={rules}
          control={control}
          render={({ field }) =>
            isPassword ? (
              <Input.Password placeholder={placeholder} {...field} size='large' {...others} />
            ) : (
              <Input placeholder={placeholder} {...field} size='large' {...others} />
            )
          }
        />
      </Form.Item>
    </>
  );
};

export default LtFormInput;
