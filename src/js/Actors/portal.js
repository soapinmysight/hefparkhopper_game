import * as ex from 'excalibur'
import { Resources, ResourceLoader } from '../resources';

export class Portal extends ex.Actor {
    constructor(x, y, width, height) {
        super({
            pos: new ex.Vector(x, y),
            width: 140,
            height: 265,
            anchor: ex.Vector.Zero, //Anchors the platforms
            collisionType: ex.CollisionType.Fixed, //Bee bounces against the platforms
            collisionGroup: ex.CollisionGroupManager.groupByName('portal'),//Make sure you bounce against all the platforms
        });
        this.graphics.use(Resources.Portal.toSprite()); //Image of platform
        this.scale = new ex.Vector(0.8, 0.8)
    }



}