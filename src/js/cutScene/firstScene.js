import {Scene, Vector} from "excalibur";
import {StartButton} from "../Actors/button.js";
import { Resources, ResourceLoader } from '../resources.js'
import {CutsceneOneBackground, CutsceneTwoBackground} from "./actors/background.js";
import {CsBeeHappy} from "./actors/characters.js"
import {CsTextBox} from "./actors/text.js"
import * as ex from "excalibur";


export class FirstCutscene extends Scene {
    game
    texts
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
        bee.pos = new Vector(300, 100)
        this.add(bee)


        this.texts = [
            new CsTextBox(Resources.textFirstScene.toSprite()),
            // Add more text instances as needed
        ];
        this.currentTextIndex = 0;
        this.add(this.texts[this.currentTextIndex]);

        const keys = ex.Input.Keys;


        this.game.input.keyboard.on("press", (evt) => {
            if (evt.key === keys.Space) { //Jumping
                this.changeElements()
            }
        })


    }
    changeElements() {
        if (this.currentTextIndex < this.texts.length - 1) {
            this.texts[this.currentTextIndex].kill();
            this.currentTextIndex++;
            this.add(this.texts[this.currentTextIndex]);
        } else if (this.currentTextIndex === this.texts.length - 1) {
            this.texts[this.currentTextIndex].kill();
            this.currentTextIndex++;
            let start = new StartButton();
            start.pos = new Vector(screen.width / 2 - 100, 500);
            start.on("pointerup", () => {
                this.game.goToScene('LevelTwo')
            });
            this.add(start);
        }
    }

}
