import {Actor, CollisionType} from "excalibur";
import {Resources} from "../resources.js";

export class Spider extends Actor {
    constructor() {
        super({
            width: 40,
            height: 40
        });
        const spider = Resources.Spider.toSprite()
        spider.width = 40
        spider.height = 40
        this.graphics.add(spider)
    }
    onInitialize(_engine) {
        super.onInitialize(_engine);
        this.body.collisionType = CollisionType.Active
        this.on("precollision", (event) => this.onPreCollision(event))
    }
    onPreCollision(event) {
        const side = event.side
        const otherActor = event.other

        if(side === 'Top') {
            console.log('spider collided on top')

        } else if (side === 'Right' || side === 'Left') {

            console.log('spider collided right or left')
        }
    }
}
