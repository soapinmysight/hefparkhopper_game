import * as ex from "excalibur";
import { Resources } from "../resources";
import { PlatformLvlOne } from "./platform.js";
import { PlatformLvlTwo } from "./platform.js";
import { PlatformLvlThree } from "./platform.js";
import { Portal } from "./portal";
import { Spider } from "./spiders";
import jumpSound from "../../sounds/Jump.mp4"

export class Maincharacter extends ex.Actor {
    health
    speed
    jumped = false
    onGround = true
    x
    flowers

    constructor(flowers) {
        const circle = ex.Shape.Circle(110, ex.vec(5, 25)) // Makes the bee a round shape so it can roll
        super({
            collisionType: ex.CollisionType.Active, // Gives the bee a collision with the platforms
            collider: circle,
            displayMode: ex.DisplayMode.FitScreen,
        });
        this.graphics.use(Resources.Bee.toSprite()); // Bee picture
        this.health = 200;
        this.speed = 300;  // The speed of the bee
        this.scale = new ex.Vector(0.4, 0.4) // Scaling of the bee
        this.pos = new ex.Vector(50, 500); //Staring position bee
        this.pointer.useGraphicsBounds = true;
        this.enableCapturePointer = true;
        this.body.gravity = true; //Gravity
        this.flowers = flowers

    }

    onInitialize(engine) {
        this.game = engine
        engine.input.keyboard.enabled = true; //Keyboard binds

        const keys = ex.Input.Keys; //Keys input

        engine.input.keyboard.on("hold", (evt) => { //When you hold a key
            if (evt.key === keys.A || evt.key === keys.Left) {
                this.vel.x = -this.speed; //Move left with A or <--
            } else if (evt.key === keys.D || evt.key === keys.Right) {
                this.vel.x = this.speed; //Move right with D or -->
            }
        })

        engine.input.keyboard.on("release", (evt) => { //When you release a key after you hold it
            if (evt.key === keys.A || evt.key === keys.D || evt.key === keys.Left || evt.key === keys.Right) {
                this.vel.x = 0; //Makes sure you stop instantly and don't roll on
            }
        });

        engine.input.keyboard.on("press", (evt) => {
            if (evt.key === keys.W || evt.key === keys.Up) { //Jumping
                if (this.onGround === true) {
                    this.jumpSound = new Audio(jumpSound)
                    this.jumpSound.play(100)
                    this.vel.y = -500
                    this.onGround = false
                    this.jumped = true
                    console.log('jump')
                }
            }
        })
        this.on('collisionstart', (evt) => this.onCollisionStart(evt))
    }

    update(engine) {
        if (this.vel.x > 0) {
            this.vel.x -= 10;
        } else if (this.vel.x < 0) {
            this.vel.x += 10;
        }

        // if (this.vel.y === 0) {
        //     this.onGround = true;
        //     this.jumped = false;
        // } else {
        //     this.onGround = false;
        // }

        engine.currentScene.camera.x = this.pos.x + 80 //Tracking the bee with the camera
        // Commented code for speeding the bee up with A & D, just for programming ease
        // engine.input.keyboard.on("hold", (evt) => {
        //     if (evt.key === ex.Input.Keys.A) {
        //         this.vel.x = -800;
        //     } else if (evt.key === ex.Input.Keys.D) {
        //         this.vel.x = 800;
        //     } else if (evt.key === ex.Input.Keys.W && this.onGround) {
        //         this.jumped = true;
        //         this.vel.y = -700;
        //     }
        // })
    }

    onCollisionStart(evt) {
        if (evt.other instanceof PlatformLvlOne) { //Checking if there is collision with the platforms
            console.log("you're on the floor");
            this.onGround = true;
        }
        if (evt.other instanceof PlatformLvlTwo) {
            console.log("you're on the floor");
            this.onGround = true;
        }
        if (evt.other instanceof PlatformLvlThree) {
            console.log("you're on the floor");
            this.onGround = true;
        }

    }

}
