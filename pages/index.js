import React, {useCallback, useState} from 'react'
import Head from 'next/head'
import Field from '../components/field'
import Score from '../components/score'
import Filters from '../components/filters'
import Character from './character'
import 'mobx-react-lite/batchingForReactDom'
import {catchData, activeMole, gameOptions} from '../game/store'
import {playGame} from '../game'

import style from "./index.module.scss"

const Home = () => {
  const [openFilters, setOpenFilters] = useState(false);
  const playHandler = useCallback(() =>{
      playGame()();
      setOpenFilters(false);
  }, []);
  const settingsHandler = useCallback(() => setOpenFilters(!openFilters), [openFilters])

  return (
    <>
      <Head>
          <title>Play whack game</title>
          <link href="https://fonts.googleapis.com/css2?family=Dancing+Script:wght@400;500;600;700&display=swap" rel="stylesheet" />
      </Head>
      <div className={style.container}>
        <h1 className={style.title}>
            <span>Whack A <Character gameOptions={gameOptions} /> Game</span>
            <Score catchData={catchData} />
        </h1>
        <hr className={style.line} />
        <div className={style.controls}>
            <button onClick={playHandler} className={style.play}>Play</button>
            <button onClick={settingsHandler} className={style.settings} />
        </div>
        <Filters gameOptions={gameOptions} isOpen={openFilters} />
        <Field activeMole={activeMole} />
      </div>
    </>
  )
}

export default Home;