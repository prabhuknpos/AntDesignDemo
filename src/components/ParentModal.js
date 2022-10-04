import React, {useEffect, useState} from 'react';
import ChileModal from './ChileModal';
import { Button, Modal } from 'antd';
import axios from 'axios';

const ParentModal = () => {
    const [data,setData] = useState('');
    const [isModalOpen,setIsModalOpen] = useState(false);

    const fetchData = () => {
        axios.get(`https://jsonplaceholder.typicode.com/users`)
        .then((response )=>{
            //  console.log(response.data);
             setData(response.data);
            })
     
        .catch(err => console.log(err))
    };

    useEffect(() => {
        fetchData();
    },[]);


    const handleOk= (e) => {      
        setIsModalOpen(false);     
    }

    const handleCancel = () => {
        setIsModalOpen(false);
    }

    const parentToChild = () => {
        setIsModalOpen(true);
        // setData("This is data from Parent Component to the Child Component.");
      }

  return (
    <div>

      <div className="child">
        <Button  onClick={() => parentToChild()}>Click Parent To Child</Button>
      </div>

      <Modal 
         title="Basic Modal" 
         open={isModalOpen}
         onOk={handleOk}
         onCancel={handleCancel}
        >
             <ChileModal parentToChild={data}> </ChileModal>
        </Modal>

    </div>
  )
}

export default ParentModal