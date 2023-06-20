import { Actor, Shape, CollisionType, Input, Vector, DisplayMode } from "excalibur";
import { Resources } from "../resources";

export class MaincharacterBoss extends Actor {

    health
    speed
    jumped = false
    onGround = true
    x
    y

    constructor() {
        const circle = Shape.Circle(110, new Vector(5, 25)) // Makes the bee a round shape so it can roll
        super({
            collisionType: CollisionType.Active, // Gives the bee a collision with the platforms
            collider: circle,
            displayMode: DisplayMode.FitScreen,
        });
        this.graphics.use(Resources.Bee.toSprite()); // Bee picture
        this.health = 200;
        this.speed = 300;  // The speed of the bee
        this.scale = new Vector(0.4, 0.4) // Scaling of the bee
        this.pos = new Vector(50, 500); //Staring position bee
        this.pointer.useGraphicsBounds = true;
        this.enableCapturePointer = true;
        this.body.gravity = true; //Gravity

    }

    onInitialize(engine) {
        engine.input.keyboard.enabled = true; //Keyboard binds
        const keys = Input.Keys; //Keys input
        engine.input.keyboard.on("hold", (evt) => { //When you hold a key
            if (evt.key === keys.A || evt.key === keys.Left) {
                this.vel.x = -this.speed; //Move left with A or <--
            } else if (evt.key === keys.D || evt.key === keys.Right) {
                this.vel.x = this.speed; //Move right with D or -->
            }
        })


        engine.input.keyboard.on("release", (evt) => { //When you release a key after you hold it
            if (evt.key === keys.A || evt.key === keys.D || evt.key === keys.Left || evt.key === keys.Right) {
                this.vel.x = -10; //Makes sure you stop instantly and don't roll on
            }
        });

        engine.input.keyboard.on("press", (evt) => { //When you press a button
            if (evt.key === keys.W || evt.key === keys.Up) {
                this.vel.y = 3000 //Jumping
                // this.pos.y = 500

                console.log('jump')
                this.onGround = false
                this.jumped = true
            }
        })


    }

    onPostUpdate(_engine, _delta) {
        super.onPostUpdate(_engine, _delta);
        // Makes sure you don't keep rolling when releasing A or D
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

        // Commented code for speeding the bee up with A & D, just for programming ease
        _engine.input.keyboard.on("hold", (evt) => {
            if (evt.key === Input.Keys.A) {
                this.vel.x = -800;
            } else if (evt.key === Input.Keys.D) {
                this.vel.x = 800;
            } else if (evt.key === Input.Keys.W && this.onGround) {
                this.jumped = true;
                this.vel.y = -700;
            }
        })

        // _engine.currentScene.camera.x = this.pos.x + 80 //Tracking the bee with the camera

        this.on("collision", (event) => this.onPreCollision(event));
    }


}