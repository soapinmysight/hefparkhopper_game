import '../css/style.css'
import * as ex from "excalibur"
import { ResourceLoader } from './resources.js'

import { LevelOne } from './Scenes/1Level.js'
import { Start } from "./Scenes/start.js";
import { FailOne } from "./Scenes/1Fail.js";
import { VictoryOne } from "./Scenes/1Victory.js";

import { LevelTwo } from "./Scenes/2Level.js";
import { FailTwo } from "./Scenes/2Fail.js";
import { VictoryTwo } from "./Scenes/2Victory.js";

// import { LevelThree } from "./Scenes/3Level.js";
import { FailThree } from "./Scenes/3Fail.js";
import { VictoryThree } from "./Scenes/3Victory.js";
import { FirstCutscene } from "./cutScene/firstScene.js";
import { StartCutscene } from "./cutScene/startScene.js";
import { SecondCutscene } from "./cutScene/secondScene.js";
import { ThirdCutscene } from "./cutScene/thirdScene.js";
import { BossFight } from "./BossFight/bossLevel.js";

import { Score } from './Actors/score';


export class Game extends ex.Engine {
    score
    constructor() {
        super({
            // width: 854,
            // height: 600,
            displayMode: ex.DisplayMode.FitScreenAndFill,
            maxFps: 60
        });
        this.start(ResourceLoader).then(() => this.startGame());
        this.showDebug(true);
        // ex.Physics.useRealisticPhysics();
        ex.Physics.acc = new ex.vec(0, 300);
        this.score = new Score()
    }

    startGame() {
        const start = new Start()
        this.addScene('Start', start)
        this.goToScene('Start')

        this.addScene("startCutscene", new StartCutscene)

        const levelOne = new LevelOne(this.score)
        this.addScene("LevelOne", levelOne)
        // this.goToScene("Levelone")

        const failOne = new FailOne()
        this.addScene('FailOne', failOne)

        const victoryOne = new VictoryOne()
        this.addScene("VictoryOne", victoryOne)

        this.addScene("firstCutscene", new FirstCutscene)

        const levelTwo = new LevelTwo()
        this.addScene("LevelTwo", levelTwo)

        const failTwo = new FailTwo()
        this.addScene("FailTwo", failTwo)

        const victoryTwo = new VictoryTwo()
        this.addScene('VictoryTwo', victoryTwo)

        this.addScene("secondCutscene", new SecondCutscene)

        // const levelThree = new LevelThree()
        // this.addScene("LevelThree", levelThree)

        const failThree = new FailThree()
        this.addScene("FailThree", failThree)

        const victoryThree = new VictoryThree()
        this.addScene("VictoryThree", victoryThree)

        this.addScene("thirdCutScene", new ThirdCutscene)

        this.addScene("bossFight", new BossFight)
    }
}

new Game();
