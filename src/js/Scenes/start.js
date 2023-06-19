import {Scene, Vector} from "excalibur";
import {GameOverButton, NextLvlButton, StartButton} from "../Actors/button.js";

export class Start extends Scene {
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
        this.startScene()
    }
    startScene(){
        console.log('startscherm')
        let start = new StartButton()
        start.pos = new Vector(400, 500)
        start.on('pointerup', () => {
            this.game.goToScene('startCutscene')
        })
        this.add(start)
        let boss = new GameOverButton()
        boss.pos = new Vector(400, 300)
        boss.on('pointerup', () => {
            this.game.goToScene('bossFight')
        })
        this.add(boss)

        let levelOne = new NextLvlButton()
        levelOne.pos = new Vector(600, 300)
        levelOne.on('pointerup', () => {
            this.game.goToScene('Levelone')
        })
        this.add(levelOne)
    }

    onDeactivate(_context) {
        super.onDeactivate(_context);


    }
}