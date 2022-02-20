import React from 'react';

import CategoryTitleRow from '../base-components/categories/CategoryTitleRow';
import CategoryTitle from '../base-components/categories/CategoryTitle';
import GoBackButton from './GoBackButton';

function CategoryBodyWithGoBack({ title }) {
    return (
        <CategoryTitleRow>
            <CategoryTitle title={title}>
                <GoBackButton />
            </CategoryTitle>
        </CategoryTitleRow>
    );
}

export default CategoryBodyWithGoBack;