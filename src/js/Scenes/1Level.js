// import '../css/style.css'
import * as ex from "excalibur"
import { Resources, ResourceLoader } from '../resources.js'
import { Maincharacter } from '../Actors/character.js'
import { Platform } from '../Actors/platform.js'
import { Background } from '../Actors/Background.js'

export class LevelOne extends ex.Scene {

    onInitialize(Engine) {

        const backgroundImage = Resources.Background.toSprite();
        const background = new Background(-500, -100, 200, 20, backgroundImage);
        this.add(background);

        // const platform = new Platform();
        // this.add(platform);
        // platform.pos = new ex.Vector(140, 550);

        // Right invisible wall
        let leftWall = new ex.Actor({
            pos: ex.vec(-1, 0),
            width: 30,
            height: 9000000000,
            collisionType: ex.CollisionType.Fixed
        })
        // Left invisible wall
        let rightWall = new ex.Actor({
            pos: ex.vec(9500, 0),
            width: 30,
            height: 9000000000,
            collisionType: ex.CollisionType.Fixed
        })
        // Roof
        let foundation = new ex.Actor({
            pos: ex.vec(0, 600),
            width: 10000,
            height: 10,
            collisionType: ex.CollisionType.Fixed
        })

        this.add(foundation)
        this.add(leftWall);
        this.add(rightWall)
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

