import '../css/style.css'
import * as ex from "excalibur"
import { Resources, ResourceLoader } from './resources.js'

import { LevelOne } from './Scenes/1Level.js'
import { Start } from "./Scenes/start.js";
import { NepOne } from "./Scenes/nepOne.js";
import { FailOne } from "./Scenes/fail1.js";
import { VictoryOne } from "./Scenes/1Victory.js";

import { LevelTwo } from "./Scenes/2Level.js";
import { FailTwo } from "./Scenes/2Fail.js";
import { VictoryTwo } from "./Scenes/2Victory.js";

import { LevelThree } from "./Scenes/3Level.js";
import { FailThree } from "./Scenes/3Fail.js";
import { VictoryThree } from "./Scenes/3Victory.js";



export class Game extends ex.Engine {
    constructor() {
        super({
            width: 854,
            height: 600,
            displayMode: ex.DisplayMode.FitScreenAndFill,
            maxFps: 60
        });
        this.start(ResourceLoader).then(() => this.startGame());
        this.showDebug(true);
        ex.Physics.useRealisticPhysics();
        ex.Physics.acc = new ex.vec(0, 800);
    }

    startGame() {
        console.log("start the game!");

        const start = new Start()
        this.addScene('Start', start)
        // this.goToScene('Start')

        const levelOne = new LevelOne()
        this.addScene("Levelone", levelOne)
        this.goToScene("Levelone")

        const levelOneTest = new NepOne()
        this.addScene('LevelOne', levelOneTest)

        const failOne = new FailOne()
        this.addScene('FailOne', failOne)

        const victoryOne = new VictoryOne()
        this.addScene("VictoryOne", victoryOne)

        const levelTwo = new LevelTwo()
        this.addScene("LevelTwo", levelTwo)

        const failTwo = new FailTwo()
        this.addScene("FailTwo", failTwo)

        const victoryTwo = new VictoryTwo()
        this.addScene('VictoryTwo', victoryTwo)

        const levelThree = new LevelThree()
        this.addScene("LevelThree", levelThree)

        const failThree = new FailThree()
        this.addScene("FailThree", failThree)

        const victoryThree = new VictoryThree()
        this.addScene("VictoryThree", victoryThree)
    }
}

new Game();
