import {Scene, Vector} from "excalibur";
import {StartButton} from "../Actors/button.js";
import {CutsceneThreeBackground, CutsceneTwoBackground} from "./actors/background.js";
import { Resources, ResourceLoader } from '../resources.js'
import {CsBeeMad} from "./actors/characters.js"
import {CsTextBox} from "./actors/text.js"

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
        bee.pos = new Vector(300, 100)
        bee.flipHorizontal = true;
        this.add(bee)

        let textSecondScene = new CsTextBox(Resources.textSecondScene.toSprite())
        this.add(textSecondScene)

        let start = new StartButton()
        start.pos = new Vector(1100, 510)
        start.on('pointerup', () => {
            this.game.goToScene('LevelThree')
        })
        this.add(start)
    }

    onDeactivate(_context) {
        super.onDeactivate(_context);


    }
}