import React from 'react'
import Range from '../range'
import Select from '../select'

import style from './filters.module.scss'

const Filters = ({gameOptions, isOpen = true}) => (
    <div className={`${style.container} ${isOpen ? style.isOpen : ''}`}>
        <h4 className={style.title}>Change game settings:</h4>
        <Range text="quantity" min="1" max="100" step="1" value={gameOptions} />
        <Range text="speed" min="0.1" max="5" step="0.1" value={gameOptions} />
        <Select list={['pikachu', 'mole', 'dog']} text="character" value={gameOptions} />
    </div>
)

export default Filters