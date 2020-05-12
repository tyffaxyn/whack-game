import React from 'react'
import { observer } from 'mobx-react'

import style from './score.module.scss'

const Score = observer(({catchData}) => {
    return (
        <span className={style.score}>{catchData.times}</span>
    )
})

export default Score;