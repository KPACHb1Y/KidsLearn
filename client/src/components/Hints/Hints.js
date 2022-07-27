import React from 'react';

export const Hints = ({ title, description }) => {
    return (
        <div className='b-hint'>
            <div className='b-hint__name'>{title}</div>
            <div className='b-hint__description'>{description}</div>
        </div>
    )
}