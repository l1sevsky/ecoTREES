import React from 'react';
import { useNavigate } from 'react-router-dom';
import CategoryTitleButton from '../base-components/buttons/CategoryTitleButton';

function GoBackButton () {
    const navigate = useNavigate();
    const goBack = () => navigate(-1);

    return (
        <CategoryTitleButton icon='back' onClick={goBack}/>
    );
}

export default GoBackButton;