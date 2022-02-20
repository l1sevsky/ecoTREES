import React from 'react';
import { Link } from 'react-router-dom';
import SvgIcon from '../general/SvgIcon';
import css from './styles/BaseButton.module.css';


function BaseButton ({ title, icon, color, type = '', path }) {
    if (type == 'link') {
        return (
            <Link className={css.link} to={path}>
                <button type='button' className={css.button + ' ' + css[color]}>
                    <SvgIcon name={icon} />
                    <p className={css.title}>{title}</p>
                </button>
            </Link> 
        );
    }

    return (
        <button type='button' className={css.button + ' ' + css[color]}>
            <SvgIcon name={icon} />
            <p className={css.title}>{title}</p>
        </button>
    );
}


export default BaseButton;