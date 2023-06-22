import {Scene, Vector} from "excalibur";
import {GameOverButton, NextLvlButton} from "../Actors/button.js";

export class LevelTwo extends Scene {
    game
    constructor() {
        super();
    }
    onInitialize(_engine) {
        super.onInitialize(_engine);
        this.game = _engine
    }
    onActivate(_context) {
        super.onActivate(_context);
        this.startLevelTwo()
    }
    startLevelTwo(){
        console.log('level two')

        let victory = new GameOverButton()
        victory.pos = new Vector(400, 500)
        victory.on('pointerup', () => {
            this.game.goToScene('FailTwo')
        })
        this.add(victory)

        let fail = new NextLvlButton()
        fail.pos = new Vector(600, 500)
        fail.on('pointerup', () => {
            this.game.goToScene('VictoryTwo')
        })
        this.add(fail)
    }

    onDeactivate(_context) {
        super.onDeactivate(_context);
    }
}