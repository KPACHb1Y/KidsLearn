import React from 'react';
import { LeftSide } from '../../components/LeftSide/LeftSide';
import { RightSide } from '../../components/RightSide/RightSide';


export const Draw = () => {
    return (
        <div className='b-container'>
        <LeftSide />
        <RightSide title='Рисование' />
    </div>
    )
}