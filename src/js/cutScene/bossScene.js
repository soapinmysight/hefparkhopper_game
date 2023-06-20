import {Scene, Vector} from "excalibur";
import {StartButton} from "../Actors/button.js";

export class bossScene extends Scene {
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
        this.startCutScene()
    }
    startCutScene(){
        console.log(`end game`)
    }

    onDeactivate(_context) {
        super.onDeactivate(_context);


    }
}