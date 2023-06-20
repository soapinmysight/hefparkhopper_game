import {Scene, Vector} from "excalibur";
import {TryAgainButton} from "../Actors/button.js";

export class FailThree extends Scene {
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
        this.startFailThree()
    }
    startFailThree(){
        console.log('fail two')
        let tryAgain = new TryAgainButton()
        tryAgain.pos = new Vector(400, 500)
        tryAgain.on('pointerup', () => {
            this.game.goToScene('LevelThree')
        })
        this.add(tryAgain)
    }

    onDeactivate(_context) {
        super.onDeactivate(_context);
    }
}