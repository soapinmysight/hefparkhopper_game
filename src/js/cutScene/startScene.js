import {Scene, Vector} from "excalibur";
import {StartButton} from "../Actors/button.js";
import {CutsceneOneBackground, CutsceneStartEndBackground} from "./actors/background.js";

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
        console.log(background)

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