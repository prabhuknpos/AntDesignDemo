import React from 'react';
import { Divider, Button } from 'antd';
import Icon, { PieChartOutlined ,AppleOutlined, LoadingOutlined, BankTwoTone, LogoutOutlined} from '@ant-design/icons';

const IconComp = () => {
    const HeartIcon = (props) => {
        return (
            <Icon
            component={() => {
                return (
                    <svg 
                    width="1cm"
                    height="1cm"
                    file="currentColor"
                    viewBox="0 0 1024 1024"
                    >
                     <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z"></path>
                    </svg>
                );
            }}
            {...props}
            >

            </Icon>
        );
    };
  return (
    <div className='App'>
        <header className='App-header'>
            <div>
            <PieChartOutlined style={{color:'purple',fontSize:100}}></PieChartOutlined>
            <AppleOutlined style={{color:'green',fontSize:100}}/>
            <LoadingOutlined spin style={{color:'red',fontSize:100}}></LoadingOutlined>
            <PieChartOutlined rotate={45} style={{color:'orange',fontSize:100}}></PieChartOutlined>

            <BankTwoTone twoToneColor='green' style={{fontSize:100}}/>
            </div>
            <Divider />
            <HeartIcon style={{coloe:'red',fontSize:200}}></HeartIcon>

            <Divider></Divider>
            <Button icon={
                <LogoutOutlined style={{color:'red',fontSize:30}}/>

            }>Button With Custom Icon</Button>
            <Divider></Divider>
            <p style={{color:'black',fontSize:30}}>I <HeartIcon></HeartIcon> Love you</p>
       </header>
    </div>
  )
}

export default IconComp