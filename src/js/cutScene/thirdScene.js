import {Scene, Vector} from "excalibur";
import {StartButton} from "../Actors/button.js";

export class ThirdCutscene extends Scene {
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
        this.startSecondCutScene()
    }
    startSecondCutScene(){

        console.log('cutscene 3rd')
        let start = new StartButton()
        start.pos = new Vector(400, 500)
        start.on('pointerup', () => {
            this.game.goToScene('bossFight')
        })
        this.add(start)
    }

    onDeactivate(_context) {
        super.onDeactivate(_context);


    }
}