import {Scene, Vector} from "excalibur";
import {NextLvlButton, StartButton} from "../Actors/button.js";
import {CutsceneOneBackground} from "./actors/background.js";

export class BossScene extends Scene {
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
        this.actors.forEach((actor) => actor.kill());
        console.log('victory boss cutscene')
        let background = new CutsceneOneBackground(-100,0)
        this.add(background)
        console.log(background)

        let tryAgain = new NextLvlButton()
        tryAgain.pos = new Vector(400, 500)
        tryAgain.on('pointerup', () => {
            this.game.goToScene('bossVictory')
        })
        this.add(tryAgain)
    }

    onDeactivate(_context) {
        super.onDeactivate(_context);


    }
}