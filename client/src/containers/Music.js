import React from 'react';
import { LeftSide } from '../components/LeftSide/LeftSide';
import { RightSide } from '../components/RightSide/RightSide';

export const Music = () => {
    return (
        <div className='b-container'>
            <LeftSide />
            <RightSide title='Музыка' />
        </div>
    )
}