import { Actor, CollisionType, Vector } from "excalibur";
import { Resources } from '../resources.js';

export class BossPlatform extends Actor {

    constructor(){
        super({
            width: Resources.BossPlatform.width,
            height: Resources.BossPlatform.height
        })
    }

    onInitialize() {

        this.graphics.add(Resources.BossPlatform.toSprite());
        this.scale = new Vector(0.3, 0.3);

        this.body.collisionType = CollisionType.Fixed;
    }
}