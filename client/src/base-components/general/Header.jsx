import React from 'react';
import css from './styles/Header.module.css';
import imgLogo from '../../resource/img/logo.png';


function Header ({ children, tel, telMask }) {
    return (
        <div className={css.layout}>
            <header className={css.header}>
                <div className={css.container}>
                    <div className={css.logo}>
                        <img src={imgLogo} />
                        <h1>ecoTREES</h1>
                    </div>
                    { children }
                    <div className={css.contact}>
                        <a href={`tel:${tel}`}>{telMask}</a>
                    </div>
                </div>
            </header>
        </div>
    );
}


export default Header;