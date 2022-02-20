import React from 'react';
import css from './styles/TextBlock.module.css';


function TextBlock ({ children }) {
    return (
        <p className={css.text} lang='ru'>
            { children }
        </p>
    );
}

export default TextBlock;