// import '../css/style.css'
import * as ex from "excalibur"
import { Resources, ResourceLoader } from '../resources.js'
import { Maincharacter } from '../Actors/character.js'
import { PlatformLvlOne } from '../Actors/platform.js'
import { BackgroundLvlOne } from '../Actors/Background.js'
import { SpikesLvlOne } from "../Actors/spikes.js"
import { Spider } from "../Actors/spiders.js"
import { ClosedPortalClass, Portal } from "../Actors/portal.js"
import { Flower } from "../Actors/flower.js"
import music from "../../sounds/bee..mp3"


export class LevelOne extends ex.Scene {
    game
    health
    score
    character
    righttext
    lefttext
    jumptext
    bgMusic
    // sound
    constructor(score) {
        super({});
        this.score = score

    }

    onInitialize(_engine) {

        super.onInitialize(_engine);
        this.game = _engine
        this.health = 2

        _engine.input.keyboard.enabled = true; //Keyboard binds
        const keys = ex.Input.Keys; //Keys input
        _engine.input.keyboard.on("press", (evt) => {
            if (evt.key === keys.D && this.righttext != false || evt.key === keys.Right && this.righttext != false) {
                setTimeout(() => {
                    this.righttext.kill()
                    this.righttext = false
                    console.log(this.righttext)
                }, 500)
            }
            // const sound = new Sound('./path/to/my.mp3', './path/to/fallback.wav');
            // const loader = new Loader([sound]);
            // await game.start(loader);
            // sound.play(0.5);
        })


        _engine.input.keyboard.on("press", (evt) => {
            if (evt.key === keys.A && this.righttext == false && this.lefttext != false || evt.key === keys.Left && this.righttext == false && this.lefttext != false) {
                setTimeout(() => {
                    this.lefttext.kill()
                    this.lefttext = false
                    console.log(this.lefttext)
                }, 500)
            }
        })

        _engine.input.keyboard.on("press", (evt) => {
            if (evt.key === keys.W && this.lefttext == false && this.jumptext != false || evt.key === keys.Up && this.lefttext == false && this.jumptext != false) {
                setTimeout(() => {
                    this.jumptext.kill()
                    this.jumptext = false
                    console.log(this.jumptext)
                }, 500)
            }
        })



    }

    onActivate(_context) {

        super.onActivate(_context);
        this.bgMusic = new Audio(music)
        this.bgMusic.loop = true
        this.bgMusic.play()
        this.startLevelOne()
    }

    startLevelOne(_engine) {

        this.righttext = new ex.Label({
            text: "Move right with right arrow or D",
            pos: new ex.Vector(40, 250),
            font: new ex.Font({
                size: 40,
                color: ex.Color.Black,
                unit: ex.FontUnit.Px,
                // family: 'Roboto'
            })
        })

        this.lefttext = new ex.Label({
            text: "Move left with left arrow or A",
            pos: new ex.Vector(40, 250),
            font: new ex.Font({
                size: 40,
                color: ex.Color.Black,
                unit: ex.FontUnit.Px,
                // family: 'Roboto'
            })
        })

        this.jumptext = new ex.Label({
            text: "Jump with up arrow or W",
            pos: new ex.Vector(40, 250),
            font: new ex.Font({
                size: 40,
                color: ex.Color.Black,
                unit: ex.FontUnit.Px,
                // family: 'Roboto'
            })
        })

        this.actors.forEach((actor) => actor.kill());
        //Background image
        const backgroundImage = Resources.Background.toSprite();
        const background = new BackgroundLvlOne(-550, -50, 100, 20, backgroundImage);
        background.scale = new ex.Vector(0.60, 0.63)
        this.add(background);


        //Tutorial text moving right
        this.add(this.righttext)

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
        const platform1 = new PlatformLvlOne(0, 580, 10000, 20, ex.Color.Green);
        platform1.scale = new ex.Vector(10.9, 1)
        this.add(platform1);

        // Flying platform (small)
        const platform2 = new PlatformLvlOne(0, 420, 925, 155);
        this.add(platform2);

        const platform4 = new PlatformLvlOne(500, 280, 925, 155);
        this.add(platform4);

        const platform5 = new PlatformLvlOne(1000, 180, 925, 155);
        this.add(platform5);

        const platform6 = new PlatformLvlOne(1500, 280, 925, 155);
        this.add(platform6);

        const platform7 = new PlatformLvlOne(1775, 280, 925, 155);
        this.add(platform7);

        const platform8 = new PlatformLvlOne(2100, 480, 925, 155);
        this.add(platform8);

        const platform9 = new PlatformLvlOne(2500, 430, 925, 155);
        this.add(platform9);

        const platform10 = new PlatformLvlOne(2900, 380, 925, 155);
        this.add(platform10);

        const platform11 = new PlatformLvlOne(3300, 330, 925, 155);
        this.add(platform11);

        const platform12 = new PlatformLvlOne(3700, 280, 925, 155);
        this.add(platform12);

        const platform13 = new PlatformLvlOne(4100, 230, 925, 155);
        this.add(platform13);

        const platform14 = new PlatformLvlOne(4500, 180, 925, 155);
        this.add(platform14);

        const platform15 = new PlatformLvlOne(4900, 130, 925, 155);
        this.add(platform15);

        const platform16 = new PlatformLvlOne(5500, 130, 925, 155);
        this.add(platform16);

        const platform17 = new PlatformLvlOne(5775, 130, 925, 155);
        this.add(platform17);

        let platform18 = new PlatformLvlOne(6500, 130, 925, 155)
        platform18.actions.repeatForever((repeatCtx) => {
            repeatCtx.moveTo(6500, 130, 100)
            repeatCtx.moveTo(6500, 540, 100)
        })
        this.add(platform18)

        let platform20 = new PlatformLvlOne(7100, 130, 925, 155)
        this.add(platform20)

        let platform21 = new PlatformLvlOne(7375, 130, 925, 155)
        this.add(platform21)

        let platform22 = new PlatformLvlOne(7650, 130, 925, 155)
        this.add(platform22)

        let platform24 = new PlatformLvlOne(7100, 330, 925, 155)
        this.add(platform24)

        let platform25 = new PlatformLvlOne(7375, 330, 925, 155)
        this.add(platform25)

        let platform26 = new PlatformLvlOne(7650, 330, 925, 155)
        this.add(platform26)

        //Spikes
        const spikes1 = new SpikesLvlOne(800, 500);
        this.add(spikes1);

        const spikes2 = new SpikesLvlOne(2500, 500);
        this.add(spikes2);

        const spikes3 = new SpikesLvlOne(2965, 500);
        this.add(spikes3);

        const spikes4 = new SpikesLvlOne(3430, 500);
        this.add(spikes4);

        const spikes5 = new SpikesLvlOne(3895, 500);
        this.add(spikes5);

        const spikes6 = new SpikesLvlOne(4360, 500);
        this.add(spikes6);

        const spikes7 = new SpikesLvlOne(4825, 500);
        this.add(spikes7);

        const spikes8 = new SpikesLvlOne(6775, 200);
        spikes8.scale = new ex.Vector(0.084, 0.084)
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
        const flower1 = new Flower(100, 350, this.score);
        this.add(flower1);

        const flower2 = new Flower(4200, 150, this.score);
        this.add(flower2);

        const flower3 = new Flower(5000, 50, this.score);
        this.add(flower3);

        const flower4 = new Flower(5550, 50, this.score);
        this.add(flower4);

        const flower5 = new Flower(5650, 50, this.score);
        this.add(flower5);

        const flower6 = new Flower(5750, 50, this.score);
        this.add(flower6);

        const flower7 = new Flower(5850, 50, this.score);
        this.add(flower7);

        const flower8 = new Flower(5950, 50, this.score);
        this.add(flower8);

        const flower9 = new Flower(7200, 50, this.score);
        this.add(flower9);

        const flower10 = new Flower(7400, 50, this.score);
        this.add(flower10);

        const flower11 = new Flower(7600, 50, this.score);
        this.add(flower11);

        const flower12 = new Flower(7800, 50, this.score);
        this.add(flower12);

        const flower13 = new Flower(7350, 250, this.score);
        this.add(flower13);

        const flower14 = new Flower(7620, 250, this.score);
        this.add(flower14);


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

        let spider4 = new Spider()
        spider4.pos = new ex.Vector(7100, 530)
        spider4.actions.repeatForever((repeatCtx) => {
            repeatCtx.moveTo(7100, 530, 100)
            repeatCtx.moveTo(7200, 530, 100)
        })
        this.add(spider4)

        let spider5 = new Spider()
        spider5.pos = new ex.Vector(7450, 530)
        spider5.actions.repeatForever((repeatCtx) => {
            repeatCtx.moveTo(7450, 530, 100)
            repeatCtx.moveTo(7600, 530, 100)
        })
        this.add(spider5)

        let spider6 = new Spider()
        spider6.pos = new ex.Vector(7900, 530)
        spider6.actions.repeatForever((repeatCtx) => {
            repeatCtx.moveTo(7900, 530, 200)
            repeatCtx.moveTo(8150, 530, 200)
        })
        this.add(spider6)


        //Portal
        let portal = new ClosedPortalClass(8400, 350)
        this.add(portal)

        // Adding bee to the game
        this.character = new Maincharacter(this.score)
        this.character.on('precollision', (event) => this.onPreCollision(event))
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
            this.game.goToScene('VictoryOne')
            this.bgMusic.pause()
        }
    }

    onPreUpdate() {
        this.scoreLabel.text = `Score: ${this.score.getScore()}`
        //Tutorial text moving left
        if (this.righttext == false && this.lefttext != false) {
            this.add(this.lefttext)
        }

        if (this.lefttext == false && this.jumptext != false) {
            this.add(this.jumptext)
        }

    }

    onPostUpdate(_engine, _delta) {
        super.onPostUpdate(_engine, _delta);
        this.scoreLabel.pos = this.character.pos.clone().add(new ex.Vector(this.character.width, -80))
        const mainCharacter = this.actors.find((actor) => actor instanceof Maincharacter);

        if (!mainCharacter) {
            this.game.goToScene('FailOne')
            this.bgMusic.pause()
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
                const newPortal = new Portal(8400, 350);
                this.add(newPortal);

            }
        }
    }
}

