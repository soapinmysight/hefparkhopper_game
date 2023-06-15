import '../css/style.css'
import * as ex from "excalibur"
import { Resources, ResourceLoader } from './resources.js'
import { Maincharacter } from './Actors/character'
// import { platform } from './Actors/platform.js'
// import { Background } from './js/Actors/Background.js'
import { LevelOne } from './Scenes/LevelOne.js'

export class Game extends ex.Engine {
    constructor() {
        super({
            width: 854,
            height: 600,
            displayMode: ex.DisplayMode.FitScreenAndFill,
            maxFps: 60
        });
        this.start(ResourceLoader).then(() => this.startGame());
        this.showDebug(true);
        ex.Physics.useRealisticPhysics();
        ex.Physics.acc = new ex.vec(0, 800);
    }

    startGame() {
        console.log("start the game!");

        const map = new LevelOne()
        this.addScene('LevelOne', map)
        this.goToScene('LevelOne')
    }
}

new Game();
