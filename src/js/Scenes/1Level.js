// import '../css/style.css'
import * as ex from "excalibur"
import { Resources, ResourceLoader } from '../resources.js'
import { Maincharacter } from '../Actors/character.js'
import { Platform } from '../Actors/platform.js'
import { Background } from '../Actors/Background.js'
import { Spikes } from "../Actors/spikes.js"
import { Spider } from "../Actors/spiders.js"

export class LevelOne extends ex.Scene {

    onInitialize(Engine) {

        //Background image
        const backgroundImage = Resources.Background.toSprite();
        const background = new Background(-550, 0, 200, 20, backgroundImage);
        this.add(background);


        // Right invisible wall
        let leftWall = new ex.Actor({
            pos: ex.vec(-1, 0),
            width: 30,
            height: 9000000000,
            collisionType: ex.CollisionType.Fixed
        })
        // Left invisible wall
        let rightWall = new ex.Actor({
            pos: ex.vec(8500, 0),
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

        // Flying platform (small)
        const platform2 = new Platform(0, 380, 925, 155);
        platform2.scale = new ex.Vector(0.3, 0.3)
        this.add(platform2);

        const platform4 = new Platform(500, 280, 925, 155);
        platform4.scale = new ex.Vector(0.3, 0.3)
        this.add(platform4);

        const platform5 = new Platform(1000, 180, 925, 155);
        platform5.scale = new ex.Vector(0.3, 0.3)
        this.add(platform5);

        const platform6 = new Platform(1500, 280, 925, 155);
        platform6.scale = new ex.Vector(0.3, 0.3)
        this.add(platform6);

        const platform7 = new Platform(1775, 280, 925, 155);
        platform7.scale = new ex.Vector(0.3, 0.3)
        this.add(platform7);


        //Spikes
        const spikes1 = new Spikes(800, 500, 925, 155);
        spikes1.scale = new ex.Vector(0.5, 0.5)
        this.add(spikes1);

        // Enemies
        const spider1 = new Spider()
        spider1.pos = new ex.Vector(200, 200)
        this.add(spider1)

        //Flying platform (second)
        // const platform3 = new Platform(700, 380, 925, 155);
        // platform3.scale = new ex.Vector(0.8, 0.3)
        // this.add(platform3);


        console.log("start de game!")
        // Adding bee to the game
        const player = new Maincharacter()
        this.add(player)
    }
}

