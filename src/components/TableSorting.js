import React, { useEffect, useState } from 'react';
import { Table } from "antd";

const TableSorting = () => {

    const [dataSource,setDataSource] = useState([]);
    const [loading,setLoading] = useState(false);
    const [page,setPage] = useState(1);
    const [pageSize,setPageSize] = useState(10);

    useEffect(() => {
        setLoading(true)
        fetch(`https://jsonplaceholder.typicode.com/todos`)
        .then(response => response.json())
        .then(data => {
            setDataSource(data)
        })
        .catch(err => {
            console.log(err)
        })
        .finally(() => {
            setLoading(false)
        })
    })

    const columns = [
        {
            key:"1",
            title:'ID',
            dataIndex:'id'
        },
        {
            key:"2",
            title:'User ID',
            dataIndex:'userId',
            sorter:(record1,record2) => {
                return record1.userId > record2.userId
            }
        },
        {
            key:"3",
            title:'Status',
            dataIndex:'completed',
            render: (completed) => {
                return <p>{completed ? 'Complete' : 'In Progress'}</p>
            },
            filters:[
                {
                    text:'Complete',value:true
                },
                {
                    text:'In Progress',value:false
                }
            ],
            onFilter:(value,record) => {
              return record.completed === value
            }
        },
    ]

  return (
    <div className='App'>
        <header className='App-header'>
            <Table            
            columns={columns}
            dataSource={dataSource}
            pagination={{
                current:page,
                pageSize:pageSize,
                total:500,
                onChange: (page,pageSize) => {
                    setPage(page);
                    setPageSize(pageSize);
                }
            }}
            ></Table>
        </header>
    </div>
  )
}

export default TableSorting