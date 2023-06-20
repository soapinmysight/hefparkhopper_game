// import '../css/style.css'
import * as ex from "excalibur"
import { Resources, ResourceLoader } from '../resources.js'
import { Maincharacter } from '../Actors/character.js'
import { Platform } from '../Actors/platform.js'
import { Background } from '../Actors/Background.js'
import { Spikes } from "../Actors/spikes.js"
import { Spider } from "../Actors/spiders.js"

export class LevelOne extends ex.Scene {
    game
    health
    constructor() {
        super();
    }
    onInitialize(_engine) {
        super.onInitialize(_engine);
        this.game = _engine
        this.health = 2
    }

    onActivate(_context) {
        super.onActivate(_context);
        this.startLevelOne()
    }

    startLevelOne() {

        //Background image
        const backgroundImage = Resources.Background.toSprite();
        const background = new Background(-550, -50, 200, 20, backgroundImage);
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

        const platform8 = new Platform(2100, 480, 925, 155);
        platform8.scale = new ex.Vector(0.3, 0.3)
        this.add(platform8);

        const platform9 = new Platform(2500, 430, 925, 155);
        platform9.scale = new ex.Vector(0.3, 0.3)
        this.add(platform9);

        const platform10 = new Platform(2900, 380, 925, 155);
        platform10.scale = new ex.Vector(0.3, 0.3)
        this.add(platform10);

        const platform11 = new Platform(3300, 330, 925, 155);
        platform11.scale = new ex.Vector(0.3, 0.3)
        this.add(platform11);

        const platform12 = new Platform(3700, 280, 925, 155);
        platform12.scale = new ex.Vector(0.3, 0.3)
        this.add(platform12);

        const platform13 = new Platform(4100, 230, 925, 155);
        platform13.scale = new ex.Vector(0.3, 0.3)
        this.add(platform13);

        const platform14 = new Platform(4500, 180, 925, 155);
        platform14.scale = new ex.Vector(0.3, 0.3)
        this.add(platform14);

        const platform15 = new Platform(4900, 130, 925, 155);
        platform15.scale = new ex.Vector(0.3, 0.3)
        this.add(platform15);
        //Spikes
        const spikes1 = new Spikes(800, 500, 925, 155);
        spikes1.scale = new ex.Vector(0.5, 0.5)
        this.add(spikes1);

        const spikes2 = new Spikes(2500, 500, 925, 155);
        spikes2.scale = new ex.Vector(0.5, 0.5)
        this.add(spikes2);

        const spikes3 = new Spikes(2965, 500, 925, 155);
        spikes3.scale = new ex.Vector(0.5, 0.5)
        this.add(spikes3);

        const spikes4 = new Spikes(3430, 500, 925, 155);
        spikes4.scale = new ex.Vector(0.5, 0.5)
        this.add(spikes4);

        const spikes5 = new Spikes(3895, 500, 925, 155);
        spikes5.scale = new ex.Vector(0.5, 0.5)
        this.add(spikes5);

        const spikes6 = new Spikes(4360, 500, 925, 155);
        spikes6.scale = new ex.Vector(0.5, 0.5)
        this.add(spikes6);

        const spikes7 = new Spikes(4825, 500, 925, 155);
        spikes7.scale = new ex.Vector(0.5, 0.5)
        this.add(spikes7);

        // const spikes8 = new Spikes(3895, 500, 925, 155);
        // spikes8.scale = new ex.Vector(0.5, 0.5)
        // this.add(spikes8);

        // Enemies
        let spider1 = new Spider()
        spider1.pos = new ex.Vector(1100, 130)
        spider1.actions.repeatForever((repeatCtx) => {
            repeatCtx.moveTo(1050, 130, 100)
            repeatCtx.moveTo(1230, 130, 100)
        })
        this.add(spider1)

        let spider2 = new Spider()
        spider2.pos = new ex.Vector(1500, 225)
        spider2.actions.repeatForever((repeatCtx) => {
            repeatCtx.moveTo(1550, 225, 100)
            repeatCtx.moveTo(2000, 225, 100)
        })
        this.add(spider2)

        let spider3 = new Spider()
        spider3.pos = new ex.Vector(4550, 165)
        spider3.actions.repeatForever((repeatCtx) => {
            repeatCtx.moveTo(4550, 130, 100)
            repeatCtx.moveTo(4720, 130, 100)
        })
        this.add(spider3)




        //Flying platform (second)
        // const platform3 = new Platform(700, 380, 925, 155);
        // platform3.scale = new ex.Vector(0.8, 0.3)
        // this.add(platform3);


        console.log("start de game!")
        // Adding bee to the game
        const player = new Maincharacter()
        this.add(player)


    }
    onPostUpdate(_engine, _delta) {
        super.onPostUpdate(_engine, _delta);
        console.log(this.health)
    }

}

