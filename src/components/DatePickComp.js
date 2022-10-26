import React, { useState } from 'react';
import { DatePicker,TimePicker,Spin ,Button} from "antd";


const DatePickComp = () => {
    const [loading,setLoading] = useState(false)
  return (
    <div className='App'>
        <header className='App-header'>
            <DatePicker />
            <DatePicker picker='month'/>
            <DatePicker picker='year'/>
            <DatePicker picker='quarter'/>
            <br></br>
            <DatePicker.RangePicker picker='year'></DatePicker.RangePicker>
     <br></br>
     <TimePicker></TimePicker>

     <br></br>
     <br></br>
     <br></br>
     <br></br>
     <br></br>

<Spin spinning={loading}></Spin>
<Button onClick={()=>{
    setLoading(preValue => !preValue)
}}>Toggle Spinnging</Button>
<Spin spinning={loading}>
<p>Tag  1</p>
<p>Tag  2</p>
<p>Tag  3</p>
</Spin>
     
        </header>
    </div>
  )
}

export default DatePickComp