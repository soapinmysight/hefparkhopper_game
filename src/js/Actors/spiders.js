import * as ex from "excalibur";
import { Resources } from "../resources.js";
import { Maincharacter } from "./character.js";

export class Spider extends ex.Actor {
    x
    y
    speed
    health
    constructor(x, y) {

        super({
            width: 100,
            height: 80,
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
        this.game = _engine

    }
    onPreCollision(event) {
        const side = event.side
        const otherActor = event.other

        if (otherActor instanceof Maincharacter) {
            if (side === 'Top') {
                console.log('character killed a spider')
                this.kill()
            } else if (side === 'Right' || side === 'Left') {
                otherActor.kill()
                console.log(`character walked into spider and died`)
            }
        }


    }
}
