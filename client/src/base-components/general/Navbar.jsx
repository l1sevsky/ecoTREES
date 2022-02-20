import React from 'react';
import css from './styles/Navbar.module.css';


function Navbar ({ children, position='' }) {
    return (
        <nav className={position == 'header' ? css.headerNavbar : css.navbar}>
            <ul className={css.elements}>
                { children }
            </ul>
        </nav>
    );
}


export default Navbar;