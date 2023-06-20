import * as ex from "excalibur";
import { Resources } from "../resources.js";

export class Spider extends ex.Actor {
    x
    y
    speed
    health
    constructor(x, y) {

        super({
            width: 120,
            height: 100,
            pos: new ex.Vector(x, y)
        });
        const spider = Resources.Spider.toSprite()
        spider.width = 120
        spider.height = 100
        this.graphics.add(spider)
        this.speed = 300

    }
    onInitialize(_engine) {
        super.onInitialize(_engine);
        this.body.collisionType = ex.CollisionType.Fixed
        this.on("precollision", (event) => this.onPreCollision(event))

    }
    onPreCollision(event) {
        const side = event.side
        const otherActor = event.other

        if (side === 'Top') {
            console.log('spider collided on top and died')
            this.kill()

        } else if (side === 'Right' || side === 'Left') {
            this.health --

            console.log(`spider collided right or left`)
        }
    }
}
