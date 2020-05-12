import React, {memo} from 'react'
import {observer} from 'mobx-react'
import {catchData} from '../../game/store'

import style from './grass.module.scss'

const Grass = observer(({active, height, gameOptions}) => {
    const clickHandler = (ev) => {
        if (ev.isTrusted) {
            catchData.times++;
        }
    }

    return (
        <div style={{'--container_height': height + 'px'}} className={style.container}>
            <div
                tabIndex={active ? 1 : ''}
                style={{'--animation-time': `${gameOptions.speed}s`, '--character': `url('/${gameOptions.character}.svg')`}}
                onClick={clickHandler} className={`${style.mole} ${active ? style.isOpen : ''}`}
            />
            <div className={style.grass} />
        </div>
    )
})

export default memo(Grass);