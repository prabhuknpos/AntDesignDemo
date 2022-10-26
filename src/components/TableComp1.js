import React , { useState } from 'react';
import {Table,Tag,Radio,Divider} from "antd";


const TableComp1 = () => {

    const [selectionType,setSelectionType] = useState('checkbox');

    const data = [
        {
            name:"mouniga",
            age:21,
            address:"Gobi",
            tags:['nice','developer'],
            key:'1'
        },
        {
            name:"prabhu",
            age:22,
            address:"dharmapuri",
            tags:['loser'],
            key:'2'
        },
        {
            name:"shalini",
            age:18,
            address:"erode",
            tags:['cool','teacher'],
            key:'3'
        },
    ]

  const columns = [
    {
        title:'Name',
        dataIndex:'name',
        key:'key',
        render:name => {
            return <a>{name}</a>
        }
    },
    {
        title:'Age',
        dataIndex:'age',
        key:'key',
        sorter: (a,b) => a.age-b.age
    },
    {
        title:'Address',
        dataIndex:'address',
        key:'key'
    },
    {
        title:'Graduated',
        key:'key',
        render: payload => {
            return <p>{payload.age > 20 ? 'True' : 'False'}</p>
        }
    },
    {
        title:"Tags",
        key:'tags',
        dataIndex:'tags',
        render: (_, {tags}) => (
            <>
            {tags.map(tag => {
                let color = tag.length > 5 ? 'geekblue' :'green';
                if(tag === 'loser')
                {
                    color = 'volcano';
                }
                return (
                    <Tag color={color} key={tag}>
                        {tag.toUpperCase()}
                    </Tag>
                )
            })}
            </>
        )
    }
  ];


  const rowSelection = {
    onChange: (selectedRowKeys, selectedRows) => {
        console.log(`selectedRowKeys: ${selectedRowKeys}`, `selectedRows:`,selectedRows);       
    },
    getCheckboxProps: (record) => ({
        disabled:record.name === 'Disabled User',
        name:record.name,
    })
  }

  return (
    <div className='App'>
        <header className='App-header'>
            <Radio.Group
                onChange={({target:{value}}) => {
                    setSelectionType(value);
                }}
                value={selectionType}>
                    <Radio value="checkbox">Checkbox</Radio>
                    <Radio value="radio">Radio</Radio>
            </Radio.Group>
            <Table
            rowSelection={{
                type:selectionType,
                ...rowSelection,
            }}
            dataSource={data}
            columns={columns}
            >

            </Table>
        </header>
    </div>
  )
}

export default TableComp1