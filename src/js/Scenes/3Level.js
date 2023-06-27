// import '../css/style.css'
import * as ex from "excalibur"
import { Resources, ResourceLoader } from '../resources.js'
import { Maincharacter } from '../Actors/character.js'
import { PlatformLvlThree } from '../Actors/platform.js'
import { BackgroundLvlThree } from '../Actors/Background.js'
import { SpikesLvlThree } from "../Actors/spikes.js"
import { MainSpike } from "../Actors/spikes.js"
import { Spider } from "../Actors/spiders.js"
import { ClosedPortalClass, Portal } from "../Actors/portal.js"
import { Flower } from "../Actors/flower.js"


export class LevelThree extends ex.Scene {
    game
    health
    score
    character
    constructor(score) {
        super({});
        this.score = score
    }

    onInitialize(_engine) {
        super.onInitialize(_engine);
        this.game = _engine
        this.health = 2
    }

    onActivate(_context) {
        super.onActivate(_context);
        this.startLevelThree()
    }

    startLevelThree() {
        this.actors.forEach((actor) => actor.kill());
        //Background image
        const backgroundthreeImage = Resources.BackgroundLvlThree.toSprite();
        const backgroundlvl3 = new BackgroundLvlThree(-550, 0, 200, 20, backgroundthreeImage);
        this.add(backgroundlvl3);

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
        const platform1 = new PlatformLvlThree(0, 580, 10000, 20, ex.Color.Green);
        platform1.scale = new ex.Vector(10.9, 1)
        this.add(platform1);

        //information for making a level
        //width spikes = 465

        // const platform5 = new PlatformLvlOne(0, 50, 925, 155);
        // this.add(platform5);
        // let spider1 = new Spider()
        // spider1.pos = new ex.Vector(100, 0)
        // spider1.actions.repeatForever((repeatCtx) => {
        //     repeatCtx.moveTo(50, 0, 100)
        //     repeatCtx.moveTo(230, 0, 100)
        // })
        // this.add(spider1)

        // const platform2 = new PlatformLvlOne(0, 70, 925, 155);
        // this.add(platform2);
        // const flower1 = new Flower(100, 0, this.score);
        // this.add(flower1);

        // game route
        const platform2 = new PlatformLvlThree(0, 200, 925, 155);
        this.add(platform2);

        let spider1 = new Spider()
        spider1.pos = new ex.Vector(100, 150)
        spider1.actions.repeatForever((repeatCtx) => {
            repeatCtx.moveTo(50, 150, 100)
            repeatCtx.moveTo(230, 150, 100)
        })
        this.add(spider1)

        const platform4 = new PlatformLvlThree(200, 400, 925, 155);
        this.add(platform4);

        const flower1 = new Flower(300, 330, this.score);
        this.add(flower1);

        const platform5 = new PlatformLvlThree(400, 200, 925, 155);
        this.add(platform5);

        let spider2 = new Spider()
        spider2.pos = new ex.Vector(100, 150)
        spider2.actions.repeatForever((repeatCtx) => {
            repeatCtx.moveTo(50, 150, 100)
            repeatCtx.moveTo(230, 150, 100)
        })
        this.add(spider2)

        const spikes1 = new SpikesLvlThree(800, 500);
        this.add(spikes1);

        const platform7 = new PlatformLvlThree(1000, 250, 925, 155);
        this.add(platform7);

        const spikes2 = new SpikesLvlThree(1265, 500);
        this.add(spikes2);

        const platform8 = new PlatformLvlThree(1600, 300, 925, 155);
        this.add(platform8);

        const spikes3 = new SpikesLvlThree(1730, 500);
        this.add(spikes3);

        const platform9 = new PlatformLvlThree(2200, 350, 925, 155);
        this.add(platform9);

        const spikes4 = new SpikesLvlThree(2195, 500);
        this.add(spikes4);

        const platform10 = new PlatformLvlThree(2800, 350, 925, 155);
        this.add(platform10);

        const platform11 = new PlatformLvlThree(3000, 200, 925, 155);
        this.add(platform11);

        const platform12 = new PlatformLvlThree(3200, 50, 925, 155);
        this.add(platform12);

        const spikes5 = new SpikesLvlThree(3200, 500);
        this.add(spikes5);

        const spikes6 = new SpikesLvlThree(3665, 500);
        this.add(spikes6);

        const platform13 = new PlatformLvlThree(3800, 350, 925, 155);
        platform13.actions.rotateBy(Math.PI / 2, Math.PI, ex.RotationType.CounterClockwise);
        // platform13.rotation = (20 * Math.PI / 180); // Rotate by 180 degrees
        this.add(platform13);

        const spikes7 = new SpikesLvlThree(4130, 500);
        this.add(spikes7);

        const platform131 = new PlatformLvlThree(4130, 350, 925, 155);
        platform131.actions.rotateBy(Math.PI / 2, Math.PI, ex.RotationType.CounterClockwise);
        // platform13.rotation = (20 * Math.PI / 180); // Rotate by 180 degrees
        this.add(platform131);

        const platform132 = new PlatformLvlThree(4300, 350, 925, 155);
        platform132.actions.rotateBy(Math.PI / 2, Math.PI, ex.RotationType.CounterClockwise);
        // platform13.rotation = (20 * Math.PI / 180); // Rotate by 180 degrees
        this.add(platform132);

        const spikes71 = new SpikesLvlThree(4595, 500);
        this.add(spikes71);

        const platform133 = new PlatformLvlThree(4650, 350, 925, 155);
        platform133.actions.rotateBy(Math.PI / 2, Math.PI, ex.RotationType.CounterClockwise);
        // platform13.rotation = (20 * Math.PI / 180); // Rotate by 180 degrees
        this.add(platform133);

        const platform134 = new PlatformLvlThree(4850, 400, 925, 155);
        platform134.actions.rotateBy(Math.PI / 2, Math.PI, ex.RotationType.CounterClockwise);
        // platform13.rotation = (20 * Math.PI / 180); // Rotate by 180 degrees
        this.add(platform134);

        const platform14 = new PlatformLvlThree(5400, 450, 925, 155);
        this.add(platform14);

        const platform15 = new PlatformLvlThree(5550, 400, 925, 155);
        this.add(platform15);

        const platform16 = new PlatformLvlThree(5700, 350, 925, 155);
        this.add(platform16);

        const platform17 = new PlatformLvlThree(5850, 300, 925, 155);
        this.add(platform17);

        const platform18 = new PlatformLvlThree(6000, 250, 925, 155);
        this.add(platform18);

        const platform19 = new PlatformLvlThree(6150, 200, 925, 155);
        this.add(platform19);

        const platform20 = new PlatformLvlThree(6300, 150, 925, 155);
        this.add(platform20);

        const platform21 = new PlatformLvlThree(7225, 150, 925, 155);
        this.add(platform21);

        const spikes8 = new SpikesLvlThree(8150, 150);
        this.add(spikes8);

        // let platform18 = new PlatformLvlOne(6500, 130, 925, 155)
        // platform18.actions.repeatForever((repeatCtx) => {
        //     repeatCtx.moveTo(6500, 130, 100)
        //     repeatCtx.moveTo(6500, 540, 100)
        // })
        // this.add(platform18)
        // const spikes30 = new SpikesLvlThree(6775, 200);
        // // spikes8.scale = new ex.Vector(0.084, 0.084)
        // spikes30.rotation = Math.PI
        // spikes30.actions.repeatForever((repeatCtx) => {
        //     repeatCtx.moveTo(6775, 200, 100)
        //     repeatCtx.moveTo(6775, 610, 100)
        // })
        // this.add(spikes30);


        const spikes30 = new SpikesLvlThree(6775, 200);
        // spikes8.scale = new ex.Vector(0.084, 0.084)
        spikes30.rotation = Math.PI
        spikes30.actions.repeatForever((repeatCtx) => {
            repeatCtx.moveTo(6775, 200, 100)
            repeatCtx.moveTo(6775, 610, 100)
        })
        this.add(spikes30);


        //Portal
        let portal = new ClosedPortalClass(8300, 350)
        this.add(portal)

        // Adding bee to the game
        this.character = new Maincharacter(this.score)
        this.character.on('precollision', (event) => this.onPreCollision(event))
        // player.anchor = new ex.Vector(5, 25)
        this.add(this.character)


        //Score label
        this.scoreLabel = new ex.Label({
            text: `Score: 0`,
            font: new ex.Font({
                unit: ex.FontUnit.Px,
                size: 20,
                color: ex.Color.Black
            })
        })
        this.add(this.scoreLabel)
    }

    onPreCollision(event) {
        let otherActor = event.other
        if (otherActor instanceof Portal) {
            this.game.goToScene('VictoryThree')
        }
    }

    onPreUpdate() {
        this.scoreLabel.text = `Score: ${this.score.getScore()}`
    }

    onPostUpdate(_engine, _delta) {
        super.onPostUpdate(_engine, _delta);
        this.scoreLabel.pos = this.character.pos.clone().add(new ex.Vector(this.character.width, -80))
        const mainCharacter = this.actors.find((actor) => actor instanceof Maincharacter);

        if (!mainCharacter) {
            this.game.goToScene('FailThree')
        }

        const allSpiders = this.actors.filter((actor) => actor instanceof Spider);
        const allSpidersDead = allSpiders.every((egg) => egg.isKilled());

        if (allSpidersDead === true) {
            // Remove ClosedPortal if it exists
            const closedPortal = this.actors.find((actor) => actor instanceof ClosedPortalClass);
            if (closedPortal) {
                closedPortal.kill();
            }

            // Add Portal if it doesn't exist
            const portal = this.actors.find((actor) => actor instanceof Portal);
            if (!portal) {
                const newPortal = new Portal(8300, 350);
                this.add(newPortal);
            }
        }
    }

}

// import {Scene} from "excalibur";
// import {Scene, Vector} from "excalibur";
// import {GameOverButton, NextLvlButton} from "../Actors/button.js";

// export class LevelThree extends Scene {
//     game
//     constructor() {
//         super();
//     }
//     onInitialize(_engine) {
//         super.onInitialize(_engine);
//         this.game = _engine
//     }
//     onActivate(_context) {
//         super.onActivate(_context);
//         this.startLevelThree()
//     }
//     startLevelThree(){
//         console.log('level three')

//         let gameOverButton = new GameOverButton()
//         gameOverButton.pos = new Vector(400, 500)
//         gameOverButton.on('pointerup', () => {
//             this.game.goToScene('FailThree')
//         })
//         this.add(gameOverButton)

//         let nextLvlButton = new NextLvlButton()
//         nextLvlButton.pos = new Vector(600, 500)
//         nextLvlButton.on('pointerup', () => {
//             this.game.goToScene('VictoryThree')
//         })
//         this.add(nextLvlButton)
//     }

//     onDeactivate(_context) {
//         super.onDeactivate(_context);



//     }
// } 