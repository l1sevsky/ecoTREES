import React from 'react';
import css from './styles/Loader.module.css';

function Loader () {
    return (
        <div className={css.container}>
            <div className={css.loader}>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
            </div>
        </div>
    );
}

export default Loader;