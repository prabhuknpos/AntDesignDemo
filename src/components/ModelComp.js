import React, { useState } from 'react';
import {
    Button,
     Modal,
     Form,
     Input, 
     Divider,
    Space
    } from 'antd';
import ChileModal from './ChileModal';

    const info = () => {
        Modal.info({
            title:'This is a notification message',
            content:(
                <div>
                    <p>kg fdsk dksfhl sdfkh</p>
                    <p>klhsdf klfsdj hfsdkj khf</p>
                </div>
            ),
            onOk() {},
        });
    };

    const success = () => {
        Modal.success({
            content:'kjgsf sfdlsfd klsdfkhf ',
        });
    };

    const error = () => {
        Modal.error({
            title:'This is an error message',
            content:'hkhsf hsf fsjghfsd j fsdh fa fklhf! '
        });
    };

    const warning = () => {
      Modal.warning({
        title:'This is a warning message',
        content:'try fsd f flkh fsd klhfhkf',
      });
    };


const ModelComp = () => {

    const [data,setData] = useState('');
    const [username,setUsername] = useState('');
    const [firstname,setFirstrname] = useState('');
    const [isModalOpen, setIsModalOpen] = useState(false);

    const showModal = () => {
        setIsModalOpen(true);
    }

    const handleOk= (e) => {
        e.preventDefault();
        console.log(username);
        console.log(firstname);
        setIsModalOpen(false);
      
    }

    const handleCancel = () => {
        setIsModalOpen(false);
    }

    
  const parentToChild = () => {
    setData("This is data from Parent Component to the child Component");
  } 

  return (
    <div>

   

        <Button type='primary' onClick={showModal}>
            Open Modal Form
        </Button>
        <Form 
        wrapperCol={{span:8}}
        labelCol={{span:8}}
        >
            <Form.Item label="First name">
                <Input 
                placeholder='First name'
                name='firstname'
                onChange={(e) => setFirstrname(e.target.value)}
                ></Input>
            </Form.Item>
        </Form>
        <Modal 
        title="Basic Modal" 
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        width={1000}
        >
            <h1>jhgdf sjf fkjhsdf t</h1>
            <p>kjgf sdjkffsd hfsd h..</p>
            <p>I can do it</p>
            <p>kjg f sf fjkh safkhfd</p>
            <h3>FirstName : {firstname}</h3>
        <Form>
            <Form.Item label="UserName">
            <Input 
            placeholder='Username'
            name='username'
            onChange={(e) => setUsername(e.target.value)}
            value={username}
            />
            </Form.Item>
        </Form>
        </Modal>
        <h1>{username}</h1>
        <Divider></Divider>

        <Space wrap>
            <Button onClick={info}>Info</Button>
            <Button onClick={success}>Success</Button>
            <Button onClick={error}>Error</Button>
            <Button onClick={warning}>Warning</Button>
        </Space>

    <Divider></Divider>

    <ChileModal parentToChild={data}></ChileModal>
    

    </div>
    
  )
}

export default ModelComp