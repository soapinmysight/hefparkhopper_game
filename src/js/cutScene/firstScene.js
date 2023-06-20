import {Scene, Vector} from "excalibur";
import {StartButton} from "../Actors/button.js";

export class FirstCutscene extends Scene {
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
        this.startFirstCutScene()
    }
    startFirstCutScene(){

        console.log('cutscene 1st')
        let start = new StartButton()
        start.pos = new Vector(400, 500)
        start.on('pointerup', () => {
            this.game.goToScene('LevelTwo')
        })
        this.add(start)
    }

    onDeactivate(_context) {
        super.onDeactivate(_context);


    }
}