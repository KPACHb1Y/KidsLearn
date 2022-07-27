import React from 'react';

export const Header = ({ title }) => {
    return (
        <div className='b-header'>
            <div className='b-header__name'>
                <h2>{title}</h2>
            </div>
        </div>
    )
}