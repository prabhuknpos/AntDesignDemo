import React, { useState } from 'react'
import {Button} from 'antd';
import { PoweroffOutlined} from '@ant-design/icons';


const ButtonComp = () => {

    const [loading,setLoading] = useState(false);

    const onButtonClick = () => {
        console.log('Button Clicked');
        setLoading(true);

        setTimeout(() => {
            setLoading(false);
        },5000);
    }
  return (
    <div>
         <Button type="primary">My First Button</Button><br></br>
         <Button type="dashed">My First Button</Button><br></br>
         <Button type="link" href='https://www.google.com'>My First Button</Button>
        <Button type='outlined' block>My First Button</Button>
        <Button type='default'
        loading={loading}
        icon={<PoweroffOutlined />}
        onClick={onButtonClick}
        style={{backgroundColor:'orange',color:'red'}}
        >My First Button</Button>
    </div>
  )
}

export default ButtonComp