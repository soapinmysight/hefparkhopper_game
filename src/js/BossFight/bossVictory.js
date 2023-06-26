import {Scene, Vector} from "excalibur";
import {NextLvlButton, TryAgainButton} from "../Actors/button.js";

export class VictoryBoss extends Scene {
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
        this.startVictoryBoss()
    }
    startVictoryBoss(){
        this.actors.forEach((actor) => actor.kill());
        console.log('victory boss')

    }

};