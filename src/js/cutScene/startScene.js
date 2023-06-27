import {Scene, Vector} from "excalibur";
import {StartButton} from "../Actors/button.js";
import {CutsceneStartEndBackground} from "./actors/background.js";

export class StartCutscene extends Scene {
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
        console.log('cutscene start')
        let background = new CutsceneStartEndBackground(0,0)
        this.add(background)

        let start = new StartButton()
        start.pos = new Vector(400, 500)
        start.on('pointerup', () => {
            this.game.goToScene('LevelOne')
        })
        this.add(start)

    }

    onDeactivate(_context) {
        super.onDeactivate(_context);


    }
}