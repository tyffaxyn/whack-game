import React, {useEffect, useRef, useState, useMemo} from 'react'
import { observer } from 'mobx-react'
import {gameOptions, numberOfBushes} from '../../game/store'
import {calculationElementsRowsAndHeight} from './utils'
import Grass from '../grass'

import style from './field.module.scss'

const Field = observer(({activeMole: {index}}) => {
    const [itemHeight, setItemHeight] = useState( 200);
    const fieldElement = useRef(null);

    useEffect(() => {
        const elem = fieldElement.current;
        const resizeHandler = () => {
            const {rows, height} = calculationElementsRowsAndHeight(elem);
            setItemHeight(height);
            numberOfBushes.items = rows;
        };
        if (elem) {
            resizeHandler()
            window.addEventListener('resize', resizeHandler, {passive: true})
        }

        return () => {
            window.removeEventListener('resize', resizeHandler)
        }
    }, [fieldElement]);

    const grassItems = useMemo(() => {
        return new Array(numberOfBushes.items).fill('')
    }, [numberOfBushes.items]);

    return (
        <div ref={fieldElement} className={style.container}>
            {
                grassItems.map((_, i) => {
                    return <Grass key={i} height={itemHeight} gameOptions={gameOptions} active={i === index} />
                })
            }
        </div>
    )
})

export default Field