import React from 'react';
import { Form,Input } from 'antd';


const ChileModal = ({parentToChild}) => {

    console.log(parentToChild);

  return (
    <div>
     {
        parentToChild.map((item,index) => {
            return (
                <div key={index}>
                    <p>{item.id}</p>
                    <p>{item.name}</p>
                    <p>{item.username}</p>
                    <p>{item.email}</p>
                    <Form labelCol={{span:8}}
                   wrapperCol={{span:8}}
                   >
                    <Input 
                    value={item.email}
                    ></Input>
                   </Form>
                </div>
            )
        })
     }
       
    </div>
  )
}

export default ChileModal