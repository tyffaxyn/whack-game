import React, {useCallback} from 'react';
import { observer } from 'mobx-react';

import style from './range.module.scss'

const Range = observer(({value, min = 1, max = 100, step = 1, text = ''}) => {
    const inputHandler = useCallback(({target}) => {
        value[text] = target.value;
    }, [])

    return (
        <div className={style.box}>
            <label className={style.label} htmlFor={text}>{text}:</label>
            <input
                className={style.range}
                onInput={inputHandler}
                id={text}
                type="range"
                step={step}
                min={min}
                max={max}
                defaultValue={value[text]}
            />
            <span className={style.value}>{value[text]}</span>
        </div>
    )
})

export default Range;