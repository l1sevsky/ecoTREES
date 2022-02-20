import React from 'react';
import SvgIcon from '../general/SvgIcon';
import css from './styles/CategoryTitleButton.module.css';


function CategoryTitleButton ({ icon, onClick }) {
    return (
        <button type='button' className={css.button} onClick={onClick}>
            <SvgIcon name={icon} />
        </button>
    );
}


export default CategoryTitleButton;