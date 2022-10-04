import React from 'react';
import { Table } from 'antd';

const TableComp = () => {

    const data = [
        {
            name:'Prabhuk',
            age:22,
            address:'Dharmapuri',
            key:'1',
            
        },
        {
            name:'Mouni',
            age:24,
            address:'fsdf',
            key:'2'
        },
        {
            name:'Shiva',
            age:2,
            address:'Salem',
            key:'3'
        },
    ]

    const columns = [
        {
            title:"Name",
            dataIndex:'name',
            key:'key',
            render:name => {
                return <a>{name}</a>
            }
        },
        {
            title:"Age",
            dataIndex:'age',
            key:'key',
            sorter: (a,b) => a.age - b.age
        },
        {
            title:"Address",
            dataIndex:'address',
            key:'key'
        },
        {
            title:'Graduated',
            key:'key',
            render: payload => {
                return <p>{payload.age > 20 ? 'True' : 'False'}</p>
            }
        }
    ]

  return (
    <div>
        <Table
        dataSource={data}
        columns={columns}
        ></Table>
    </div>
  )
}

export default TableComp