import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import uniqid from 'uniqid';
import { useDispatch, useSelector } from 'react-redux';
import { requestProducts, requestProductPricelists } from '../store/lumberProductsSlice';

import Loader from '../base-components/general/Loader';
import Category from '../base-components/categories/Category';
import CategoryBodyWithGoBack from '../page-components/CategoryTitleWithGoBack';
import CategoryTitle from '../base-components/categories/CategoryTitle';
import CategoryBody from '../base-components/categories/CategoryBody';
import TextBlock from '../base-components/categories/TextBlock';
import CategoryNote from '../base-components/categories/CategoryNote';
import PricelistsRow from '../page-components/PricelistsRow';


function LumberProductInfoPage () {
    const { id } = useParams();
    const dispatch = useDispatch();
    const product = useSelector(state => state.lumberProducts.productList.find(pr => pr._id === id));
    const productPrices = useSelector(state => state.lumberProducts.currentProduct.pricelists);
    const isLoadingProduct = useSelector(state => state.lumberProducts.isLoading);
    const isLoadingPricelists = useSelector(state => state.lumberProducts.currentProduct.isLoading);

    useEffect(() => {
        if (!product) dispatch(requestProducts());
        dispatch(requestProductPricelists(id));
    }, []);

    return (
        <>
            <Category>
                <CategoryBodyWithGoBack title={product?.value || ''} />
                { isLoadingProduct || !product
                    ? <Loader /> 
                    : <>
                        <CategoryTitle title='Описание' type='subtitle' />
                        <CategoryBody>
                            <TextBlock>
                                {product.description}
                            </TextBlock>
                        </CategoryBody>
                        <CategoryTitle title='Прайслист' type='subtitle' />
                        <CategoryBody>
                            <CategoryNote>
                                оптовая цена применяется при заказе от {product.start_wholesale_price} метров
                            </CategoryNote>
                        </CategoryBody>
                            {
                                productPrices.map(wood => (
                                    <PricelistsRow {...wood} key={uniqid.time()} />
                                ))
                            }
                      </>
                }
            </Category>
        </>
    );
}

export default LumberProductInfoPage;