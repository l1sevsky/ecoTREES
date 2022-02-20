import React from 'react';
import css from './styles/Category.module.css';


function Category ({ children }) {
    return (
        <div className={css.layout}>
            { children }
        </div>
    );
}


export default Category;