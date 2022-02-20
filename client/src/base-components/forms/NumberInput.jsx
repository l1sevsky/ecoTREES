import React, { useState } from 'react';
import css from './styles/NumberInput.module.css';


function NumberInput ({ startValue = 1, measuringUnit = 'шт', step = 1, min = 1, max = 100000}) {
    const [value, setValue] = useState(startValue);

    const changeValue = newValue => {
        if (newValue === '') 
            return setValue(newValue);
        
        newValue = Number(newValue);

        if (newValue >= max) 
            setValue(String(max));
        else if (newValue <= min) 
            setValue(String(min));
        else 
            setValue(String(newValue));
    }

    return (
        <div className={css.layout}>
            <div className={css.inputBlock}> 
                <input 
                    type="number"
                    value={value}
                    onChange={ e => changeValue(e.target.value) } 
                />
                <span>{measuringUnit}</span>
            </div>
            <div className={css.buttons}>
                <button 
                    type='button'
                    className={css.btnPlus}
                    onClick={() => changeValue(+value + step) }
                ></button>
                <button 
                    type='button' 
                    className={css.btnMinus}
                    onClick={() => changeValue(+value - step) }
                ></button>
            </div>
        </div>
    );
}

export default NumberInput;