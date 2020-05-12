import {numberOfBushes, gameOptions, catchData, activeMole} from './store'

const randomMole = () => {
    let prev = null;

    return function getMoleNumber() {
        let moleInd = Math.round(Math.random() * numberOfBushes.items);

        if (moleInd === prev) {
            return getMoleNumber();
        }
        prev = moleInd;

        return moleInd;
    }
}

const getRandomTime = (min = gameOptions.speed * 1000, max = (gameOptions.speed * 1000) + 2000) => {
    return Math.round(Math.random() * (max - min) + min);
}
const getRandomMole = randomMole();

let timeOut = null;

const playGame = () => {
    catchData.times = 0;
    activeMole.index = null;
    clearTimeout(timeOut);

    return function play(time = gameOptions.speed, stopTime = gameOptions.quantity) {
        timeOut = setTimeout(() => {
            activeMole.index = getRandomMole();

            if (stopTime === 0) {
                activeMole.index = null;
            }

            if (stopTime > 0) {
                play(getRandomTime(), stopTime - 1)
            }
        }, time)
    }
}

export {playGame}