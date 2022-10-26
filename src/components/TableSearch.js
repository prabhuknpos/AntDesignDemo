import React, { useState } from 'react';
import { Table ,Input, Button} from "antd";
import { SearchOutlined } from '@ant-design/icons';


const TableSearch = () => {
    const [dataSource,setDataSource] = useState([
        {
            name:"Mouniga",
            age:22,
            address:"New York"
        },
        {
            name:"Prabhuk",
            age:24,
            address:"Tokiyo"
        },
        {
            name:"Kavi",
            age:32,
            address:"Denver"
        },
        {
            name:"Rabada",
            age:44,
            address:"South Africa"
        },
    ]);

    const columns = [
        {
            title:'Name',
            dataIndex:'name',
            filterDropdown: ({setSelectedKeys,selectedKeys,confirm,clearFilters}) => {
                return (
                <>
                <Input autoFocus placeholder='Type Text Here'
               value={selectedKeys[0]}
                onChange={(e) => {
                    setSelectedKeys(e.target.value?[e.target.value]:[]);
                    confirm({closeDropdown:false});
                }}
                onPressEnter={() =>{
                    confirm();
                }}
                onBlur={() => {
                    confirm();
                }}
                ></Input>
                <Button onClick={() => {confirm()}} type='primary'>Search</Button>
                <Button onClick={() => {clearFilters()}} type='danger'>Reset</Button>
                </>
                );
            },
            filterIcon:()=>{
                return <SearchOutlined />
            },
            onFilter:(value,record) => {
                return record.name.toLowerCase().includes(value.toLowerCase())
            },
        },
        {
            title:'Age',
            dataIndex:'age',
            filterDropdown: ({setSelectedKeys,selectedKeys,confirm,clearFilters}) => {
                return (
                <>
                <Input autoFocus placeholder='Type AGe Here'
               value={selectedKeys[0]}
                onChange={(e) => {
                    setSelectedKeys(e.target.value?[e.target.value]:[]);
                    confirm({closeDropdown:false});
                }}
                onPressEnter={() =>{
                    confirm();
                }}
                onBlur={() => {
                    confirm();
                }}
                ></Input>
                <Button onClick={() => {confirm()}} type='primary'>Search</Button>
                <Button onClick={() => {clearFilters()}} type='danger'>Reset</Button>
                </>
                );
            },
            filterIcon:()=>{
                return <SearchOutlined />
            },
            onFilter:(value,record) => {
                return record.age == value;
            },
        },
        {
            title:'Address',
            dataIndex:'address',
            filterDropdown: ({setSelectedKeys,selectedKeys,confirm,clearFilters}) => {
                return (
                <>
                <Input autoFocus placeholder='Type AGe Here'
               value={selectedKeys[0]}
                onChange={(e) => {
                    setSelectedKeys(e.target.value?[e.target.value]:[]);
                    confirm({closeDropdown:false});
                }}
                onPressEnter={() =>{
                    confirm();
                }}
                onBlur={() => {
                    confirm();
                }}
                ></Input>
                <Button onClick={() => {confirm()}} type='primary'>Search</Button>
                <Button onClick={() => {clearFilters()}} type='danger'>Reset</Button>
                </>
                );
            },
            filterIcon:()=>{
                return <SearchOutlined />
            },
            onFilter:(value,record) => {
                return record.address.toLowerCase().includes(value.toLowerCase())
            },
        },
        
    ];


  return (
    <div className='App'>
        <header className='App-header'>
            <Table
            style={{display:"flex",flex:1,margin:10,}}
            columns={columns}
            dataSource={dataSource}
            ></Table>
        </header>
    </div>
  )
}

export default TableSearch