import React from 'react';
import css from './styles/CategoryBody.module.css';


function CategoryBody ({ children }) {
    return (
        <div className={css.body}>
            { children }
        </div>
    );
}


export default CategoryBody;