import { Scene, Vector } from "excalibur";
import BosscutsceneMusic from "../../sounds/Bosscutscene.mp3"
import {StartButton} from "../Actors/button.js";
import {CutsceneStartEndBackground} from "./actors/background.js";
import {CsBeeBaby, CsBeeHappy, CsBeeMad, CsSpider, CsSpiderDead} from "./actors/characters.js";
import {CsTextBox} from "./actors/text.js";
import {Resources} from "../resources.js";
import * as ex from "excalibur";

export class BossScene extends Scene {
    game
    texts

    beeHappy
    beeBabyOne
    beeBabyTwo
    beeBabyThree
    spiderDead
    constructor() {
        super();
    }
    onInitialize(_engine) {
        super.onInitialize(_engine);
        this.game = _engine
    }
    onActivate(_context) {
        super.onActivate(_context);
        this.BosscutsceneMusic = new Audio(BosscutsceneMusic)
        this.BosscutsceneMusic.play()
        this.startCutScene()
    }
    startCutScene() {
        this.actors.forEach((actor) => actor.kill());
        console.log('victory boss cutscene')
        let background = new CutsceneStartEndBackground(-100, 0)
        this.add(background)
        console.log(background)

        this.texts = [
            new CsTextBox(Resources.CsBossOne.toSprite()),
            new CsTextBox(Resources.CsBossTwo.toSprite()),
        ];
        this.currentTextIndex = 0;
        this.add(this.texts[this.currentTextIndex]);

        const keys = ex.Input.Keys;


        this.game.input.keyboard.on("press", (evt) => {
            if (evt.key === keys.Space) { //Jumping
                this.changeElements()
            }
        })

        this.spiderDead = new CsSpiderDead(700, 400)
        this.add(this.spiderDead)

        this.beeHappy = new CsBeeHappy(200, 200)
        this.add(this.beeHappy)

        this.beeBabyOne = new CsBeeBaby(150, 200)
        this.add(this.beeBabyOne)

        this.beeBabyTwo = new CsBeeBaby(170, 130)
        this.add(this.beeBabyTwo)

        this.beeBabyThree = new CsBeeBaby(220, 120)
        this.add(this.beeBabyThree)

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
                this.game.goToScene('bossVictory')
            });
            this.add(start);
            if (this.currentTextIndex === 2) {
                this.spiderDead.actions.moveTo(1300, 800, 400)
            }
        }
    }
}