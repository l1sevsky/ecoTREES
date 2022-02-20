import React from 'react';
import uniqid from 'uniqid';
import css from './styles/LumberPricelistCard.module.css';


function LumberPricelistCard ({ variety, prices }) {
    return (
        <div className={css.card}>
            <h4>Сорт { variety }</h4>
            <table className={css.table}>
                <thead>
                    <tr>
                        <th>Длина, м</th>
                        <th>Оптовая цена</th>
                        <th>Розничная цена</th>
                    </tr>
                </thead>
                <tbody>
                    { 
                        prices.map( row =>
                            <tr key={ uniqid.time() }>
                                <td>
                                    { row.from_length }{ row.from_length % 1 === 0 ? '.0' : ''}
                                    {' - '} 
                                    { row.to_length }{ row.to_length % 1 === 0 ? '.0' : ''}
                                </td>
                                <td>{ row.wholesale_price } &#8381;/м</td>
                                <td>{ row.retail_price } &#8381;/м</td>
                            </tr>
                        ) 
                    }
                </tbody>
            </table>
        </div>
    );
}

export default LumberPricelistCard;