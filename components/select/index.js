import React, {useCallback} from 'react'

import style from './select.module.scss'

const Select = ({list = [], value, text = ''}) => {
    const changeHandler = useCallback(({target}) => {
        value[text] = target.value;
    }, [])

    return (
        <div className={style.box}>
            <label className={style.label}>{text}:</label>
            <select defaultValue={value[text]} onChange={changeHandler} id={text} className={style.select}>
                {
                    list.map((it, i) => {
                        return <option key={i} value={it}>{it}</option>
                    })
                }
            </select>
        </div>
    )
}

export default Select