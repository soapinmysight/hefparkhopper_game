import {Scene, Vector} from "excalibur";
import {StartButton} from "../Actors/button.js";
import {CutsceneThreeBackground, CutsceneTwoBackground} from "./actors/background.js";
import {CsBeeMad} from "./actors/characters.js"


export class SecondCutscene extends Scene {
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

        console.log('cutscene 2nd')
        let background = new CutsceneThreeBackground(-50,0)
        this.add(background)
        console.log(background)

        const bee = new CsBeeMad()
        bee.graphics.use(Resources.HappiestBee.toSprite())
        bee.pos = new Vector(400, 300)
        this.add(bee)

        let start = new StartButton()
        start.pos = new Vector(400, 500)
        start.on('pointerup', () => {
            this.game.goToScene('LevelThree')
        })
        this.add(start)
    }

    onDeactivate(_context) {
        super.onDeactivate(_context);


    }
}