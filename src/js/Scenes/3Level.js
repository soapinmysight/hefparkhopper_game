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

        // Flying platform (small)
        const platform2 = new PlatformLvlThree(0, 380, 925, 155);
        this.add(platform2);

        const platform4 = new PlatformLvlThree(500, 280, 925, 155);
        this.add(platform4);

        const platform5 = new PlatformLvlThree(1000, 180, 925, 155);
        this.add(platform5);

        const platform6 = new PlatformLvlThree(1500, 280, 925, 155);
        this.add(platform6);

        // let platform18 = new PlatformLvlThree(6500, 130, 925, 155)
        // platform18.actions.repeatForever((repeatCtx) => {
        //     repeatCtx.moveTo(6500, 130, 100)
        //     repeatCtx.moveTo(6500, 540, 100)
        // })
        // this.add(platform18)

        let platform20 = new PlatformLvlThree(7100, 130, 925, 155)
        this.add(platform20)

        //Spikes
        const spikes1 = new SpikesLvlThree(800, 500);
        this.add(spikes1);

        const spikes2 = new SpikesLvlThree(2500, 500);
        this.add(spikes2);

        const spikes3 = new SpikesLvlThree(2965, 500);
        this.add(spikes3);

        const spikes4 = new SpikesLvlThree(3430, 500);
        this.add(spikes4);

        const spikes5 = new SpikesLvlThree(3895, 500);
        this.add(spikes5);

        const spikes6 = new SpikesLvlThree(4360, 500);
        this.add(spikes6);

        const spikes7 = new SpikesLvlThree(4825, 500);
        this.add(spikes7);

        const spikes8 = new SpikesLvlThree(6775, 200);
        // spikes8.scale = new ex.Vector(0.084, 0.084)
        spikes8.rotation = Math.PI
        spikes8.actions.repeatForever((repeatCtx) => {
            repeatCtx.moveTo(6775, 200, 100)
            repeatCtx.moveTo(6775, 610, 100)
        })
        this.add(spikes8);

        // const spikes8 = new Spikes(3895, 500, 925, 155);
        // spikes8.scale = new ex.Vector(0.5, 0.5)
        // this.add(spikes8);

        //Flowers
        const flower1 = new Flower(50, 280, this.score);
        this.add(flower1);

        // Enemies
        let spider1 = new Spider()
        spider1.pos = new ex.Vector(1100, 130)
        spider1.actions.repeatForever((repeatCtx) => {
            repeatCtx.moveTo(1050, 130, 100)
            repeatCtx.moveTo(1230, 130, 100)
        })
        this.add(spider1)

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