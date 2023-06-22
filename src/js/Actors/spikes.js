import * as ex from 'excalibur'
import { Resources, ResourceLoader } from '../resources';
import {Maincharacter} from "./character.js";

export class MainSpike extends ex.Actor {

    onInitialize(engine) {
        super.onInitialize(engine);
        this.body.collisionType = ex.CollisionType.Fixed;
        this.on("precollision", (event) => this.onPreCollision(event));
    }
    onPreCollision(event) {
        const otherActor = event.other
        if(otherActor instanceof Maincharacter){
            otherActor.kill();
        }
    }
}

export class SpikesLvlOne extends MainSpike {
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
}
export class SpikesLvlTwo extends MainSpike {
    constructor(x, y) {
        super({
            pos: new ex.Vector(x, y),
            width: 925,
            height: 155,
            anchor: ex.Vector.Zero, //Anchors the platforms
            // collisionType: ex.CollisionType.Fixed, //Bee bounces against the platforms
            // collisionGroup: ex.CollisionGroupManager.groupByName('spikes'),//Make sure you bounce against all the platforms
        });
        this.graphics.use(Resources.SpikesLvlTwo.toSprite()); //Image of platform
        this.scale = new ex.Vector(0.5, 0.5)
    }
}
export class SpikesLvlThree extends MainSpike {
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
}