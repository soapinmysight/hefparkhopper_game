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

        this.graphics.add(Resources.TempBossFloor.toSprite());

        this.body.collisionType = CollisionType.Fixed;
    }
}