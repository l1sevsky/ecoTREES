import React from 'react';
import SvgIcon from '../general/SvgIcon';
import BaseButton from '../buttons/BaseButton';

import css from './styles/LumberProductCard.module.css';


function LumberProductCard ({ productId, productName, woodlist, wholesalePrice, retailPrice, bgImg }) {
    const image = { backgroundImage: `url(${process.env.PUBLIC_URL + '/photos/' + bgImg})`};
    let woods = woodlist.join(', ');
    woods = woods.slice(0, 1) + woods.slice(1).toLowerCase(); 

    return (
        <article className={css.card} style={image}>
            <div className={css.contentHeader}>
                <h3>{productName}</h3>
                <div className={css.woods}>
                    <SvgIcon name='tree' />
                    <p>{ woods }</p>
                </div>
            </div>
            <div className={css.contentMain}>
                <div className={css.buttons}>
                    <BaseButton 
                        title='Заказать' 
                        icon='add-basket' 
                        color='green' 
                        type='link'
                        path={'/order/' + productId}
                    />
                    <BaseButton 
                        title='Подробнее' 
                        icon='more' 
                        color='black' 
                        type='link'
                        path={'/product/' + productId}
                    />
                </div>
                <div className={css.prices}>
                    <div className={css.wholesalePrice}>
                        <p className={css.price}>
                            от <span>{ wholesalePrice } &#8381;</span>
                        </p>
                        <p className={css.priceType}>Оптовая цена</p>
                    </div>
                    <div className={css.retailPrice}>
                        <p className={css.price}>
                            от <span>{ retailPrice } &#8381;</span>
                        </p>
                        <p className={css.priceType}>Розничная цена</p>
                    </div>
                </div>
            </div>
        </article>
    );
}

export default LumberProductCard;