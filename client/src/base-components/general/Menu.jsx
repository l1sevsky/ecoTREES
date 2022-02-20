import React from 'react';
import css from './styles/Menu.module.css';


function Menu ({ children }) {
    return (
        <div className={css.layout}>
            <div className={css.container}>
                { children }
            </div>
        </div>  
    );
}


export default Menu;