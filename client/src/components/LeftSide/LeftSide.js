import React from 'react';
import { Link } from 'react-router-dom';
import { links } from '../../utils/linksRouters';
import { Avatar } from '../../components/Avatar/Avatar';

export const LeftSide = ({ nameuser }) => {
    return (
        <div className='b-leftSide'>
            <Avatar avatar='Картинка' />
            <div className='b-leftSide__nameuser'>
                <p>{nameuser ? nameuser : 'Имя ребенка'}</p>
            </div>
            <ul className='b-leftSide__menu'>
                {links.map((link) => {
                    return (
                        <li key={link.name} className='b-leftSide__item'>
                            <Link to={link.link}>{link.name}</Link>
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}