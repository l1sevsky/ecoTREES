import React from 'react';
import CategoryTitle from '../base-components/categories/CategoryTitle';
import CategoryOverflowBody from '../base-components/categories/CategoryOverflowBody';
import LumberPricelistCard from '../base-components/products/LumberPricelistCard';
import uniqid from 'uniqid';

function PricelistsRow ({ wood, varieties }) {
    return (
        <>
            <CategoryTitle title={wood} />
            <CategoryOverflowBody>
                { varieties.map(variety =>
                    <LumberPricelistCard {...variety} key={uniqid.time()} />
                )}
            </CategoryOverflowBody>
        </>
    );
}

export default PricelistsRow;