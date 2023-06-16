import * as ex from "excalibur";
import { Resources } from "../resources";

export class Maincharacter extends ex.Actor {
    health
    speed
    jumped = false
    onGround = true
    x
    y

    constructor() {
        const circle = ex.Shape.Circle(110, ex.vec(5, 25))
        super({
            collisionType: ex.CollisionType.Active,
            collider: circle,
            displayMode: ex.DisplayMode.FitScreen,
        });

        this.graphics.use(Resources.Bee.toSprite());
        this.health = 3;
        this.speed = 300;
        this.scale = new ex.Vector(0.4, 0.4)
        this.pos = new ex.Vector(50, 500);
        this.pointer.useGraphicsBounds = true;
        this.enableCapturePointer = true;
        this.body.gravity = true;

    }

    onInitialize(engine) {

        engine.input.keyboard.enabled = true;

        const keys = ex.Input.Keys;

        engine.input.keyboard.on("hold", (evt) => {
            if (evt.key === keys.A || evt.key === keys.Left) {
                this.vel.x = -this.speed;
            } else if (evt.key === keys.D || evt.key === keys.Right) {
                this.vel.x = this.speed;
                // } else if (evt.key === keys.W || evt.key === keys.Up) {
                //     this.jumped = true;
                //     this.vel.y = -300;
                // }

            }
        })


        engine.input.keyboard.on("release", (evt) => {
            if (evt.key === keys.A || evt.key === keys.D || evt.key === keys.Left || evt.key === keys.Right) {
                this.vel.x = -10;
            } else if (evt.key === keys.W || evt.key === keys.Up) {
                // Handle W key release
            }
        });

        engine.input.keyboard.on("press", (evt) => {
            if (evt.key === keys.W || evt.key === keys.Up) {
                this.vel.y = 3000
                console.log('jump')
                this.onGround = false
                this.jumped = true
            }
        })


    }

    update(engine) {
        // Makes sure you don't keep rolling when releasing A or D
        if (this.vel.x > 0) {
            this.vel.x -= 10;
        } else if (this.vel.x < 0) {
            this.vel.x += 10;
        }


        if (this.vel.y === 0) {
            this.onGround = true;
            this.jumped = false;
        } else {
            this.onGround = false;
        }

        // Commented code for speeding the bee up with A & D, just for programming ease
        // engine.input.keyboard.on("hold", (evt) => { // Changed parameter name from Engine to engine
        //     if (evt.key === ex.Input.Keys.A) {
        //         this.vel.x = -800;
        //     } else if (evt.key === ex.Input.Keys.D) {
        //         this.vel.x = 800;
        //     } else if (evt.key === ex.Input.Keys.W && this.onGround) {
        //         this.playerAnimations["jumpAnimation"].reset();
        //         this.jumped = true;
        //         this.vel.y = -700;
        //     }
        // })


        engine.currentScene.camera.x = this.pos.x + 80
        // this.pos = this.pos.add(this.vel.scale(engine.deltaTime / 1000));
    }
}
