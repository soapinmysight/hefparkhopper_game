import {Scene, Vector} from "excalibur";
import {StartButton} from "../Actors/button.js";
import {CutsceneOneBackground, CutsceneStartEndBackground} from "./actors/background.js";
import {CsBee, CsBeeBaby, CsBeeMad, CsBeeSad, CsSpider, CsSpiderDead} from "./actors/characters.js";
import {CsTextBox} from "./actors/text.js";
import {Resources} from "../resources.js";

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
        this.actors.forEach((actor) => actor.kill());

        let background = new CutsceneOneBackground(-100,0)
        this.add(background)


        let bee = new CsBee(200, 200)
        this.add(bee)

        let sadBee = new CsBeeSad(400, 200)
        this.add(sadBee)

        let madBee = new CsBeeMad(600, 200)
        this.add(madBee)

        let babyBee = new CsBeeBaby(300, 400)
        this.add(babyBee)

        let spider = new CsSpider(200, 400)
        this.add(spider)

        let spiderDead = new CsSpiderDead(200, 400)
        this.add(spiderDead)

        let textOne = new CsTextBox(Resources.BeeText.toSprite())
        this.add(textOne)

        let start = new StartButton()
        start.pos = new Vector(400, 500)
        start.on('pointerup', () => {
            this.game.goToScene('LevelOne')
        })
        this.add(start)



    }
    onPostUpdate(_engine, _delta) {
        super.onPostUpdate(_engine, _delta);

    }

    onDeactivate(_context) {
        super.onDeactivate(_context);


    }
}