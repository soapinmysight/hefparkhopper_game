import {Scene, Vector} from "excalibur";
import {GameOverButton, NextLvlButton} from "../Actors/button.js";

export class LevelThree extends Scene {
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
        this.startLevelThree()
    }
    startLevelThree(){
        console.log('level three')

        let gameOverButton = new GameOverButton()
        gameOverButton.pos = new Vector(400, 500)
        gameOverButton.on('pointerup', () => {
            this.game.goToScene('FailThree')
        })
        this.add(gameOverButton)

        let nextLvlButton = new NextLvlButton()
        nextLvlButton.pos = new Vector(600, 500)
        nextLvlButton.on('pointerup', () => {
            this.game.goToScene('VictoryThree')
        })
        this.add(nextLvlButton)
    }

    onDeactivate(_context) {
        super.onDeactivate(_context);



    }
}