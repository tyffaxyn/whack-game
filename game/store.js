import {observable} from "mobx";

const catchData = observable({
    times: 0
});

const activeMole = observable({
    index: null
});

const numberOfBushes = observable({
    items: 10
});

const gameOptions = observable({
    quantity: 10,
    speed: 1.6,
    character: 'pikachu'
});

export {catchData, activeMole, numberOfBushes, gameOptions}