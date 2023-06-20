import {Scene, Vector} from "excalibur";
import {NextLvlButton, TryAgainButton} from "../Actors/button.js";

export class VictoryOne extends Scene {
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
        this.startVictoryOne()
    }
    startVictoryOne(){
        console.log('victory one')
        let tryAgain = new NextLvlButton()
        tryAgain.pos = new Vector(400, 500)
        tryAgain.on('pointerup', () => {
            this.game.goToScene('firstCutscene')
        })
        this.add(tryAgain)
    }

    onDeactivate(_context) {
        super.onDeactivate(_context);
    }
}