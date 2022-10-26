import React, { useState } from 'react';
import { Table,Tag } from "antd";

const TableSelect = () => 
{

    const [alreadySelectRows,setAlreadySelectedRows] = useState(['1','3']);

    const columns = [
        {
            title:'Student ID',
            dataIndex:'id'
        },
        {
            title:'Student Name',
            dataIndex:'name'
        },
        {
            title:'Student Grade',
            dataIndex:'grade',
            render:(tag) => {
              const color = tag.includes('A+') ? 'Green' : tag.includes('B') ? 'blue' : 'red'
                return <Tag color={color} key={tag}>{tag}</Tag>
            }
        }  
    ];

    const dataSource = [
        {
            key:'1',
            id:1,
            name:'mouniga',
            grade:'B'
        },
        {
            key:'2',
            id:2,
            name:'prabhu',
            grade:'A+'
        },
        {
            key:'3',
            id:3,
            name:'shalini',
            grade:'C'
        },
        {
            key:'4',
            id:4,
            name:'kavi',
            grade:'A+'
        },
        {
            key:'5',
            id:5,
            name:'Tokiyo',
            grade:'A'
        },
    ]

  return (
    <div className='App'>
        <header className='App-header'>
            <Table
             columns={columns}
             dataSource={dataSource}
             rowSelection={
            {
                type:'checkbox',
                selectedRowKeys:alreadySelectRows,
                onSelect:(record) => {
                console.log({record});
                },
                getCheckboxProps:(records) =>({
                    // disabled:records.grade === 'C'
                }),
             selections:[
                Table.SELECTION_NONE,
                Table.SELECTION_ALL,
                Table.SELECTION_INVERT,
                {
                    key:'even',
                    text:'Select Even Rows',
                    onSelect:(allKeys) => {
                      const selectedKeys =allKeys.filter((key)=> {
                       if(key %2 !==0)
                       {
                        return false;
                       }
                       return true;
                      }) 
                      setAlreadySelectedRows(selectedKeys)
                    }
                },
                {
                    key:'excellent',
                    text:'Select Students with Excellent Grades',
                    onSelect:(allKeys) => {
                        const selectedKeys = allKeys.filter(key=>{
                           const isExcellent= dataSource.find(student => {
                                return student.key = key && student.grade.includes('A+')
                            })
                            return isExcellent;
                        })
                        setAlreadySelectedRows(selectedKeys)
                    }
                }
             ]
            }
           }
        >

            </Table>
        </header>
    </div>
  )
}

export default TableSelect