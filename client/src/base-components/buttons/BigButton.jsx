import React from 'react';
import SvgIcon from '../general/SvgIcon';
import css from './styles/BigButton.module.css';


function BigButton ({ title, icon }) {
    return (
        <button type='button' className={css.button}>
            <SvgIcon name={icon} />
            <p className={css.title}>
                { title }
            </p>
        </button>
    );
}


export default BigButton;