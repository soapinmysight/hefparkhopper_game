import {Scene, Vector} from "excalibur";
import {GameOverButton, NextLvlButton, StartButton} from "../Actors/button.js";

export class NepOne extends Scene {
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
        this.startLevelOne()
    }
    startLevelOne(){
        console.log('cutscene')

        let victory = new GameOverButton()
        victory.pos = new Vector(400, 500)
        victory.on('pointerup', () => {
            this.game.goToScene('FailOne')
        })
        this.add(victory)

        let fail = new NextLvlButton()
        fail.pos = new Vector(600, 500)
        fail.on('pointerup', () => {
            this.game.goToScene('VictoryOne')
        })
        this.add(fail)
    }

    onDeactivate(_context) {
        super.onDeactivate(_context);



    }
}