import * as ex from 'excalibur'
import { Resources, ResourceLoader } from '../resources';

export class Flower extends ex.Actor {
    constructor(x, y, width, height) {
        super({
            pos: new ex.Vector(x, y),
            width: 2250,
            height: 2130,
            anchor: ex.Vector.Zero, //Anchors the platforms
            collisionType: ex.CollisionType.Fixed, //Bee bounces against the platforms
            collisionGroup: ex.CollisionGroupManager.groupByName('flower'),//Make sure you bounce against all the platforms
        });
        this.graphics.use(Resources.Flower.toSprite()); //Image of platform
        this.scale = new ex.Vector(0.03, 0.03)
    }



}