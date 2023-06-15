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
            // collider: ex.Shape.Circle(200, 40, ex.Vector.Half, ex.vec(0, 0)),
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
            } else if (evt.key === keys.W || evt.key === keys.Up) {
                this.jumped = true;
                this.vel.y = -300;
            } else if (evt.key === keys.S || evt.key === keys.Down) {
                // Handle S key press
            }


        });

        engine.input.keyboard.on("release", (evt) => {
            if (evt.key === keys.A || evt.key === keys.D || evt.key === keys.Left || evt.key === keys.Right) {
                this.vel.x = 0;
            } else if (evt.key === keys.W || evt.key === keys.Up) {
                // Handle W key release
            } else if (evt.key === keys.S || evt.key === keys.Down) {
                // Handle S key release
            }
        });

    }

    update(engine) {
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

        // if (this.vel.y === 0) { // Changed comparison operator from == to ===
        //     this.onGround = true;
        //     this.jumped = false;
        // } else {
        //     this.onGround = false;
        // }
        engine.currentScene.camera.x = this.pos.x + 80
        // this.pos = this.pos.add(this.vel.scale(engine.deltaTime / 1000));
    }
}
