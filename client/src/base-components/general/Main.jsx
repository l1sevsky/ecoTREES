import React from 'react';
import css from './styles/Main.module.css';


function Main ({ children }) {
    return (
        <main className={css.main}>
            { children }
        </main>
    );
}


export default Main;