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

        // const platform = new Platform();
        // this.add(platform);
        // platform.pos = new ex.Vector(140, 550);

        // Platform on the bottom
        const platform1 = new Platform(0, 580, 10000, 20, ex.Color.Green);
        platform1.scale = new ex.Vector(10.9, 1)
        this.add(platform1);

        // Flying platform (first)
        const platform2 = new Platform(0, 380, 925, 155);
        platform2.scale = new ex.Vector(0.3, 0.3)
        this.add(platform2);

        const platform3 = new Platform(700, 380, 925, 155);
        platform3.scale = new ex.Vector(0.8, 0.3)
        this.add(platform3);


        console.log("start de game!")
        const player = new Maincharacter()
        this.add(player)
        // this.camera.strategy.lockToActor(this.player)
    }
}

