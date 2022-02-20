import React from 'react';
import css from './styles/CategoryTitleButtons.module.css';


function CategoryTitleButtons ({ children }) {
    return (
        <div className={css.titleButtons}>
            { children }
        </div>
    );
}


export default CategoryTitleButtons;