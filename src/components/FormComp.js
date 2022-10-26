import React, { useState } from 'react';
import {Form, Input,Button,message,Alert} from "antd";

const FormComp = () => {

    const [showAlert,setShowAlert] = useState(false)

    const onFinish=(e) => {
        console.log(e)
        setTimeout(() => {
            setShowAlert(true);
            // message.success('Login Success!');
        },2000)
    }

  return (
    <div className='App'>
        <header className='App-header'>
            {
                showAlert && 
                <Alert type='error' message="Error" description="There was error while login"
                closable
                ></Alert>
            }
        <Form onFinish={onFinish}>
            <Form.Item label="User Name" name="username">
                <Input  placeholder='User Name' required/>
            </Form.Item>
            <Form.Item label="Password" name="password">
                <Input.Password placeholder='Password' />
            </Form.Item>
            <Form.Item>
                <Button block type='primary' htmlType='submit'>Login</Button>
            </Form.Item>
        </Form>
        </header>
    </div>
  )
}

export default FormComp