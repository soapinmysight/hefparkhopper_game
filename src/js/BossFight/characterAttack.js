import { Actor, Vector, CollisionType, Random, Shape } from "excalibur"
import { Resources } from "../resources.js"

import { BossSpider } from "./boss.js"
import { BossFloor } from "./bossBottomBorder.js"
import { SpiderWebShot } from "./bossAttack.js"

export class HoneyBomber extends Actor {

    constructor(x, y){

        const circle = Shape.Circle(40);

        super({
            // width: Resources.HoneyBomb.width,
            // height: Resources.HoneyBomb.height,
            x: x + Math.random() * 50,
            y: y + Math.random() * 50,
            collider: circle
        })
    }

    onInitialize(engine){

        this.game = engine;

        this.body.collisionType = CollisionType.Active;
        this.body.useGravity = true;

        this.vel = new Vector(400 , -400);
        this.rotation = Math.random() * 10;

        this.graphics.use(Resources.HoneyBomb.toSprite());
        this.scale = new Vector(0.5, 0.5);

        this.on("collisionstart", (event) => this.bomb(event));
    }

    bomb(event){

        if(event.other instanceof BossSpider){
            event.other.hitBoss(30);
            this.kill();
        }

        if(event.other instanceof BossFloor){
            this.kill();
        }

        if(event.other instanceof SpiderWebShot){
            this.kill();
            event.other.kill();
        }
    }
}