
import { Scene, Vector } from "excalibur"
import { StartButton, TryAgainButton } from "../Actors/button.js";
import { CutsceneOneBackground } from "../cutScene/actors/background.js";
import { OneFailVicBackground } from "./failVictoryActors/background.js";
import { FailText } from "./failVictoryActors/text.js";
import failMusic from "../../sounds/Sad.mp4"


export class FailOne extends Scene {

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
        this.failMusic = new Audio(failMusic)
        this.failMusic.loop = true
        this.failMusic.play()
        this.startFailOne()
    }
    startFailOne() {
        this.actors.forEach((actor) => actor.kill());
        console.log('failOne')
        let background = new OneFailVicBackground(-100, 0)
        this.add(background)

        let fail = new FailText(screen.width / 2 - 100, 150)
        this.add(fail)


        let tryAgain = new TryAgainButton()
        tryAgain.pos = new Vector(670, 450)
        tryAgain.on('pointerup', () => {
            this.game.goToScene('LevelOne')
            this.failMusic.pause()
        })
        this.add(tryAgain)
    }

    onDeactivate(_context) {
        super.onDeactivate(_context);


    }
}