import React from 'react';
import { Button, DatePicker, Input, Progress, Slider, Space, Spin } from "antd";

const CustomTheme = () => {
  return (
    <div className='App'>
        <header className='App-header'>
            <Space direction='vertical'>
            <Button type='primary'>Button</Button>
            <Input placeholder='type here...'></Input>
           <Progress percent={50} type="circle"></Progress>
           <Spin spinning></Spin>
           <DatePicker></DatePicker>
           <Slider ></Slider>
           
            </Space>
        </header>
    </div>
  )
}

export default CustomTheme