import React, {useState} from 'react';
import {Progress} from "antd";

const ProgressComp = () => {
  return (
    <div className='App'>
        <header className='App-header'>

    <Progress percent={33} type='circle'></Progress>
    <Progress percent={33} type='line' status='active'></Progress>
    <Progress percent={33} type='line' strokeColor="red" strokeWidth={60}></Progress>
    <Progress percent={33} type='circle' status='success'></Progress>
    <Progress percent={33} type='line' status='exception'></Progress>
    <Progress percent={33} type='line' status='success'></Progress>
    <Progress percent={33} type='line'steps={3}></Progress>

        </header>
    </div>
  )
}

export default ProgressComp