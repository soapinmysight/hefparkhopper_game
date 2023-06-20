import { Actor, Vector, CollisionType } from "excalibur";
import { Resources } from '../resources.js';

export class BackgroundBoss extends Actor {

    constructor(){
        super({
            width: Resources.TempBossFloor.width,
            height: Resources.TempBossFloor.height
        })
    }

    onInitialize(){
        
        this.graphics.add(Resources.BossBackground.toSprite());
        this.body.collisionType = CollisionType.Fixed;

        this.scale = new Vector(0.4, 0.4);
    }
}