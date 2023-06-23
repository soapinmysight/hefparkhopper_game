import { Actor, Vector, CollisionType } from "excalibur"
import { Resources } from "../resources.js"

import { MaincharacterBoss } from "./bossCharacter.js"
import { BossFloor } from "./bossBottomBorder.js"

export class SpiderWebShot extends Actor {

    constructor(){
        super({
            width: 90,
            height: 90
        })
    }

    onInitialize(engine){

        this.game = engine;

        // this.body.collisionType = CollisionType.Active;
        this.body.useGravity = false;

        this.graphics.use(Resources.BossWeb.toSprite());

        this.on("collisionstart", (event) => this.spiderWeb(event));
    }

    spiderWeb(event){

        if(event.other instanceof MaincharacterBoss){
            event.other.takeDamage(50);
            this.kill();
        }

        if(event.other instanceof BossFloor){
            this.kill();
        }
    }
}