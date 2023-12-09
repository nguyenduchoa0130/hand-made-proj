import { Form, Input } from 'antd';
import React from 'react';
import { Controller } from 'react-hook-form';

const LtFormTextArea = ({ label, error, name, rules, control, children, placeholder }) => {
  return (
    <>
      <Form.Item label={label} validateStatus={error ? 'error' : ''} help={error && error.message}>
        <Controller
          name={name}
          rules={rules}
          control={control}
          render={({ field }) => (
            <Input.TextArea rows={4} placeholder={placeholder} {...field} size='large' />
          )}
        />
      </Form.Item>
    </>
  );
};

export default LtFormTextArea;
