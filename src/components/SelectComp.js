import React from 'react';
import { Select } from 'antd';

const SelectComp = () => {

    const fruits = ['banana','mango','orange','cherry'];

  return (
    <div>
        <p>Which are your Favorite Fruit</p>
        <Select mode='multiple'
        maxTagCount={2}
        allowClear
        placeholder='Select Fruits' 
        style={{width:'50%'}}>
            {
                fruits.map((fruit,index) => {
                    return <Select.Option 
                    key={index}
                    value={fruit}
                    ></Select.Option>
                })
            }
        </Select>
    </div>
  )
}

export default SelectComp