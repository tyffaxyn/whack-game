import React from 'react'
import { observer } from 'mobx-react'

const Character = observer(({gameOptions}) => {
    return (
        <span style={{textTransform: 'capitalize'}}>
            {gameOptions.character}
        </span>
    )
})

export default Character;