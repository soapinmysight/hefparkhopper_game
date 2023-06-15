import * as ex from 'excalibur'
import { Resources, ResourceLoader } from '../resources';

export class Platform extends ex.Actor {
    constructor(x, y, width, height) {
        super({
            pos: new ex.Vector(x, y),
            width: width,
            height: height,
            color: ex.Color.Green, // Set the color to Green
            anchor: ex.Vector.Zero,
            collisionType: ex.CollisionType.Fixed,
            collisionGroup: ex.CollisionGroupManager.groupByName('platform'),
        });
        this.graphics.use(Resources.Platform.toSprite());
    }



}
// export class Platform extends ex.Actor {

//     constructor() {

//         super({
//             height: Resources.Platform.height,
//             width: Resources.Platform.width
//         });

//     }

//     onInitialize() {

//         this.graphics.use(Resources.Platform.toSprite());
//         this.scale = new ex.Vector(0.25, 0.25);

//     }
// }