import React from 'react';
import CategoryTitleButtons from './CategoryTitleButtons';
import css from './styles/CategoryTitle.module.css';


function CategoryTitle ({ children, title, type = 'title' }) {
    let titleCSS;

    if (type == 'title') titleCSS = css.title;
    else if (type == 'subtitle') titleCSS = css.subtitle;

    return (
        <div className={css.titleBlock}>
            <CategoryTitleButtons>
                { children }
            </CategoryTitleButtons>
            <h2 className={titleCSS}>
                { title }
            </h2>
        </div>
    );
}


export default CategoryTitle;