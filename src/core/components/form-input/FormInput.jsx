import { Form, Input } from 'antd';
import React, { memo } from 'react';
import { Controller } from 'react-hook-form';

const FormInput = ({ label, error, control, name, placeholder, rules, isPassword }) => {
  return (
    <>
      <Form.Item label={label} validateStatus={error ? 'error' : ''} help={error && error.message}>
        <Controller
          name={name}
          rules={rules}
          control={control}
          render={({ field }) =>
            isPassword ? (
              <Input.Password placeholder={placeholder} {...field} size='large' />
            ) : (
              <Input placeholder={placeholder} {...field} size='large' />
            )
          }
        />
      </Form.Item>
    </>
  );
};

export default memo(FormInput);
