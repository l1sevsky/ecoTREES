import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { requestProducts } from '../store/lumberProductsSlice';

import CategoryBody from '../base-components/categories/CategoryBody';
import Category from '../base-components/categories/Category';
import LumberProductCard from '../base-components/products/LumberProductCard';
import Loader from '../base-components/general/Loader';
import CategoryBodyWithGoBack from '../page-components/CategoryTitleWithGoBack';


function CatalogPage () {
    const products = useSelector(state => state.lumberProducts.productList);
    const { isLoading, isError, lastLoadingMessage } = useSelector(state => state.lumberProducts);
    const dispatch = useDispatch();
    
    useEffect(async () => {  
        dispatch(requestProducts());
    }, []);

    return (
        <Category>
            <CategoryBodyWithGoBack title='Каталог' />
            <CategoryBody>
                { isLoading
                    ? <Loader />
                    : isError
                        ? <h2 style={{fontSize: 40, textAlign: 'center', color: 'tomato'}}>
                            {lastLoadingMessage}
                          </h2>
                        : products.map(product => (
                            <LumberProductCard 
                                key={product._id}
                                productId={product._id}
                                productName={product.value} 
                                woodlist={product.available_woods}
                                wholesalePrice={product.min_wholesale_price}
                                retailPrice={product.min_retail_price}
                                bgImg={product.image}
                            />
                ))}
            </CategoryBody>
        </Category>
    );
}

export default CatalogPage;