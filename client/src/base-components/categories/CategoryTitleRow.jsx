import React from 'react';
import css from './styles/CategoryTitleRow.module.css';


function CategoryTitleRow ({ children }) {
    return (
        <div className={css.row}>
            { children }
        </div>
    );
}


export default CategoryTitleRow;