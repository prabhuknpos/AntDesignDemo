import React from 'react';
import { Input } from 'antd';
import { UserOutlined} from '@ant-design/icons';

const InputComp = () => {
  return (
    <div>
        <h1>Input Components</h1>
        <Input
        placeholder='Name'
        maxLength={10}
        prefix={<UserOutlined />}
        suffix={<UserOutlined />}
        allowClear
        ></Input>
    </div>
  )
}

export default InputComp