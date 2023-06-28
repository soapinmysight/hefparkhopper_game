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

import { LevelThree } from "./Scenes/3Level.js";
import { FailThree } from "./Scenes/3Fail.js";
import { VictoryThree } from "./Scenes/3Victory.js";
import { FirstCutscene } from "./cutScene/firstScene.js";
import { StartCutscene } from "./cutScene/startScene.js";
import { SecondCutscene } from "./cutScene/secondScene.js";
import { ThirdCutscene } from "./cutScene/thirdScene.js";
import { BossFight } from "./BossFight/bossLevel.js";

import { Score } from './Actors/score';
import { FailBoss } from "./BossFight/bossFail.js";
import { VictoryBoss } from "./BossFight/bossVictory.js";
import { BossScene } from "./cutScene/bossScene.js";


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
        // this.showDebug(true);
        // ex.Physics.useRealisticPhysics();
        ex.Physics.acc = new ex.vec(0, 300);
        this.score = new Score()
    }

    startGame() {

        this.addScene('Start', new Start)
        this.goToScene('Start')

        this.addScene("startCutscene", new StartCutscene)

        this.addScene("LevelOne", new LevelOne(this.score))
        this.addScene('FailOne', new FailOne)
        this.addScene("VictoryOne", new VictoryOne(this.score))

        this.addScene("firstCutscene", new FirstCutscene)

        this.addScene("LevelTwo", new LevelTwo(this.score))
        this.addScene("FailTwo", new FailTwo)
        this.addScene('VictoryTwo', new VictoryTwo(this.score))

        this.addScene("secondCutscene", new SecondCutscene)

        const levelThree = new LevelThree((this.score))
        this.addScene("LevelThree", levelThree)

        this.addScene("FailThree", new FailThree)
        this.addScene("VictoryThree", new VictoryThree(this.score))

        this.addScene("thirdCutScene", new ThirdCutscene)

        this.addScene("bossFight", new BossFight)
        this.addScene("bossFail", new FailBoss)
        this.addScene("bossCutscene", new BossScene)
        this.addScene("bossVictory", new VictoryBoss(this.score))
    }
}

new Game();

