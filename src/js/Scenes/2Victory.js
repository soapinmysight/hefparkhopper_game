import {Scene, Vector} from "excalibur";
import {NextLvlButton} from "../Actors/button.js";

export class VictoryTwo extends Scene {
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
        this.startVictoryTwo()
    }
    startVictoryTwo(){
        console.log('victory one')
        let nextLvlButton = new NextLvlButton()
        nextLvlButton.pos = new Vector(400, 500)
        nextLvlButton.on('pointerup', () => {
            this.game.goToScene('secondCutscene')
        })
        this.add(nextLvlButton)
    }

    onDeactivate(_context) {
        super.onDeactivate(_context);
    }
}