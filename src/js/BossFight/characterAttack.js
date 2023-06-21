import { Actor, Vector, CollisionType, Random } from "excalibur"
import { Resources } from "../resources.js"

import { BossSpider } from "./boss.js"
import { BossFloor } from "./bossBottomBorder.js"

export class HoneyBomber extends Actor {

    constructor(){
        super({
            width: Resources.HoneyBomb.width,
            height: Resources.HoneyBomb.height
        })
    }

    onInitialize(engine){

        this.game = engine;

        this.body.collisionType = CollisionType.Active;
        this.body.useGravity = true;

        this.vel = new Vector(400 , -300);
        // this.rotation = Math.random() * 10;

        this.graphics.use(Resources.HoneyBomb.toSprite());
        this.scale = new Vector(0.5, 0.5);

        this.on("collisionstart", (event) => this.bomb(event));
    }

    bomb(event){

        if(event.other instanceof BossSpider){
            event.other.hitBoss(1000);
            this.kill();
        }

        if(event.other instanceof BossFloor){
            this.kill();
        }
    }
}