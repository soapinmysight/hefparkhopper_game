import { Actor, Vector, CollisionType } from "excalibur";
import { Resources } from '../resources.js';

export class BossFloor extends Actor {

    constructor(){
        super({
            width: Resources.TempBossFloor.width,
            height: Resources.TempBossFloor.height
        })
    }
    onInitialize(){
        // this.pos = new Vector (960,1030);

        this.graphics.add(Resources.TempBossFloor.toSprite());
        this.scale = new Vector(0.9,0.9)

        this.body.collisionType = CollisionType.Fixed;
    }
}