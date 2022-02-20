import React, { useState } from 'react';
import uniqid from 'uniqid';
import css from './styles/CheckboxBase.module.css';


function CheckboxBase ({ title, name, value, active = false }) {
    const radioUniqId = uniqid.time();
    const [checked, setChecked] = useState(active);

    return (
        <div className={css.button}>
            <input 
                className={css.input} 
                type="checkbox" 
                name={name} 
                value={value} 
                id={radioUniqId}
                checked = {checked}
                onChange = { () => setChecked(prev => !prev) }
            />
            <label className={css.label}  htmlFor={radioUniqId} >{ title }</label>
        </div>
    );
}

export default CheckboxBase;