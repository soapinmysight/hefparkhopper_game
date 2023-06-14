export class Maincharacter extends Actor {
    health
    speed
    jumped = false
    onGround = true

    constructor() {
        this.health = 3
        this.speed
        this.pos = new Vector(100, 100)
        this.vel = new Vector(0, 0)
        this.pointer.useGraphicsBounds = true;
        this.enableCapturePointer = true;
    }

    onInitialize(engine) {


    }
}