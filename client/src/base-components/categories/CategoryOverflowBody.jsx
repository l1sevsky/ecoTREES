import React from 'react';
import css from './styles/CategoryOverflowBody.module.css';


function CategoryOverflowBody ({ children }) {
    return (
        <div className={css.body}>
            { children }
        </div>
    );
}


export default CategoryOverflowBody;