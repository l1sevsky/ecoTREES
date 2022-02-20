import React from 'react';
import css from './styles/CategoryNote.module.css';

function CategoryNote ({ children }) {
    return (
        <p className={css.note}>
           * { children }
        </p>
    );
}

export default CategoryNote;