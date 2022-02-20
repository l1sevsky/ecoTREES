import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';

import CatalogPage from './pages/CatalogPage';
import BasketPage from './pages/BasketPage';
import HomePage from './pages/HomePage';
import UserPage from './pages/UserPage';
import LumberProductPage from './pages/LumberProductPage';
import MakeLumberOrderPage from './pages/LumberOrderPage';

import PageLayout from './page-components/PageLayout';


function App () {
    return (
        <>
           <Routes>
                <Route path='/' element={<PageLayout />}>
                    <Route index element={<HomePage />} />
                    <Route path='catalog' element={<CatalogPage />} />
                    <Route path='basket' element={<BasketPage />} />
                    <Route path='user' element={<UserPage />} />
                    <Route path='product/:id' element={<LumberProductPage />} />
                    <Route path='order/:id' element={<MakeLumberOrderPage />} />
                    <Route path='*' element={<Navigate to='/catalog' replace />} />
                </Route>
            </Routes> 
        </>
    );
}

export default App;