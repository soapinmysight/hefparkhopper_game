
import {Scene, Vector} from "excalibur"
import {StartButton, TryAgainButton} from "../Actors/button.js";
import {CutsceneOneBackground} from "../cutScene/actors/background.js";
import {OneFailVicBackground} from "./failVictoryActors/background.js";


export class FailOne extends Scene {

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
        this.startFailOne()
    }
    startFailOne(){
        this.actors.forEach((actor) => actor.kill());
        console.log('failOne')
        let background = new OneFailVicBackground(-100,0)
        this.add(background)


        let tryAgain = new TryAgainButton()
        tryAgain.pos = new Vector(400, 500)
        tryAgain.on('pointerup', () => {
            this.game.goToScene('LevelOne')
        })
        this.add(tryAgain)
    }

    onDeactivate(_context) {
        super.onDeactivate(_context);


    }
}