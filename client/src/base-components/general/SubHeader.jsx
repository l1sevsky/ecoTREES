import React from 'react';
import css from './styles/SubHeader.module.css';


function SubHeader ({ position='' }) {
    return (
        <div className={`${css.subheader} ${position == 'header' ? css.inHeader : ''}`}>
            <div className={css.container}>
                <p className={css.siteDescription}>
                    Экологичные товары <br />
                    из дерева в <span>Нижнем Новгороде</span>
                </p>
            </div>
        </div>
    );
}


export default SubHeader;