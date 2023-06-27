import {Scene, Vector} from "excalibur";
import {TryAgainButton} from "../Actors/button.js";
import {OneFailVicBackground, TwoFailVicBackground} from "./failVictoryActors/background.js";

export class FailTwo extends Scene {
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
        this.startFailTwo()
    }
    startFailTwo(){

        this.actors.forEach((actor) => actor.kill());
        let background = new TwoFailVicBackground(0,0)
        this.add(background)

        console.log('fail two')
        let tryAgain = new TryAgainButton()
        tryAgain.pos = new Vector(400, 500)
        tryAgain.on('pointerup', () => {
            this.game.goToScene('LevelTwo')
        })
        this.add(tryAgain)
    }

}