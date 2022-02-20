import React from 'react';
import { Link, useMatch } from 'react-router-dom';

import SvgIcon from './SvgIcon';
import css from './styles/NavbarElement.module.css';


function NavbarElement ({ icon, title, path }) {
    const match = useMatch(path);

    return (
        <li className={match ? css.active : ''} >
            <Link className={css.link} to={path}>
                <SvgIcon name={icon}/>
                <p>{title}</p>
            </Link>
        </li>
    );
}


export default NavbarElement;