// import '../css/style.css'
import * as ex from "excalibur"
import { Resources, ResourceLoader } from '../resources.js'
import { Maincharacter } from '../Actors/character'
import { platform } from '../platform.js'
import { Background } from '../Background.js'

export class level1 extends ex.Scene {

    onInitialize(Engine) {

        const backgroundImage = Resources.Background.toSprite();
        const background = new Background(0, 0, 200, 20, backgroundImage);
        this.add(background);

        const platform1 = new platform(0, 580, 2000, 20, ex.Color.Green);
        this.add(platform1);

        const platform2 = new platform(0, 380, 200, 20, ex.Color.Green);
        this.add(platform2);

        console.log("start de game!")
        const player = new Maincharacter()
        this.add(player)
        // this.camera.strategy.lockToActor(this.player)
    }
}