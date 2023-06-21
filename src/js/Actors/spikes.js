import * as ex from 'excalibur'
import { Resources, ResourceLoader } from '../resources';
import {Maincharacter} from "./character.js";

export class Spikes extends ex.Actor {
    constructor(x, y, width, height) {
        super({
            pos: new ex.Vector(x, y),
            width: width,
            height: height,
            anchor: ex.Vector.Zero, //Anchors the platforms
            // collisionType: ex.CollisionType.Fixed, //Bee bounces against the platforms
            // collisionGroup: ex.CollisionGroupManager.groupByName('spikes'),//Make sure you bounce against all the platforms
        });
        this.graphics.use(Resources.Spikes.toSprite()); //Image of platform
        this.scale = new ex.Vector(0.5, 0.5)
    }
    onInitialize(engine) {
        super.onInitialize(engine);
        this.body.collisionType = ex.CollisionType.Active;
        this.on("precollision", (event) => this.onPreCollision(event));
    }
    onPreCollision(event) {
        const otherActor = event.other

        if(otherActor instanceof Maincharacter){
            otherActor.kill();
        }

    }



}