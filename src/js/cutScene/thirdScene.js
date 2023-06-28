import {Scene, Vector} from "excalibur";
import {StartButton} from "../Actors/button.js";
import {CsBeeHappy, CsBeeMad, CsSpider} from "./actors/characters.js";
import {CsTextBox} from "./actors/text.js";
import {Resources} from "../resources.js";
import {CutsceneBossBackground, CutsceneOneBackground} from "./actors/background.js";
import * as ex from "excalibur"

export class ThirdCutscene extends Scene {
    game
    texts

    beeHappy
    beeMad

    spider
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

        console.log('cutscene 3rd')
        let background = new CutsceneBossBackground(-100,0)
        this.add(background)
        console.log(background)

        this.texts = [
            new CsTextBox(Resources.CsThirdOne.toSprite()),
            new CsTextBox(Resources.CsThirdTwo.toSprite()),
            new CsTextBox(Resources.CsThirdThree.toSprite()),

        ];
        this.currentTextIndex = 0;
        this.add(this.texts[this.currentTextIndex]);

        const keys = ex.Input.Keys;


        this.game.input.keyboard.on("press", (evt) => {
            if (evt.key === keys.Space) { //Jumping
                this.changeElements()
            }
        })

        this.beeHappy = new CsBeeHappy(200, 200)
        this.add(this.beeHappy)

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
            start.pos = new Vector(screen.width/2-100, 500);
            start.on("pointerup", () => {
                this.game.goToScene("bossFight");
            });
            this.add(start);
        }    if (this.currentTextIndex === 1) {
            this.beeHappy.kill()
            this.beeMad = new CsBeeMad(200,200)
            this.add(this.beeMad)

            this.spider = new CsSpider(1000, 300)
            this.spider.actions.moveTo(850,300, 200)
            this.add(this.spider)


        } else if (this.currentTextIndex === 2) {
            this.spider.actions.moveTo(1400,300, 200)
        }

    }
}