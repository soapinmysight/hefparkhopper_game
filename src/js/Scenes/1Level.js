// import '../css/style.css'
import * as ex from "excalibur"
import { Resources, ResourceLoader } from '../resources.js'
import { Maincharacter } from '../Actors/character.js'
import { Platform } from '../Actors/platform.js'
import { Background } from '../Actors/Background.js'

export class LevelOne extends ex.Scene {

    onInitialize(Engine) {

        const backgroundImage = Resources.Background.toSprite();
        const background = new Background(0, 0, 200, 20, backgroundImage);
        this.add(background);

        const platform = new Platform();
        this.add(platform);
        platform.pos = new ex.Vector(140, 550);

        console.log("start de game!")
        const player = new Maincharacter()
        this.add(player)
        // this.camera.strategy.lockToActor(this.player)
    }
}

