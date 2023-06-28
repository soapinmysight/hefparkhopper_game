import {Scene, Vector} from "excalibur";
import {StartButton} from "../Actors/button.js";
import { Resources, ResourceLoader } from '../resources.js'
import {CutsceneOneBackground, CutsceneTwoBackground} from "./actors/background.js";
import {CsBeeHappy} from "./actors/characters.js"

export class FirstCutscene extends Scene {
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
        this.startFirstCutScene()
    }
    startFirstCutScene(){

        let background = new CutsceneTwoBackground(-50,0)
        this.add(background)
        console.log(background)

        const bee = new CsBeeHappy()
        bee.pos = new Vector(400, 300)
        this.add(bee)

        let textFirstScene = new CsTextBox(Resources.textFirstScene.toSprite())
        this.add(textFirstScene)

        console.log('cutscene 1st')
        let start = new StartButton()
        start.pos = new Vector(400, 500)
        start.on('pointerup', () => {
            this.game.goToScene('LevelTwo')
        })
        this.add(start)


    }

    onDeactivate(_context) {
        super.onDeactivate(_context);


    }
}