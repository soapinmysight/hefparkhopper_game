import * as ex from 'excalibur';
import {Resources} from "../resources.js";

export class BackgroundLvlOne extends ex.Actor {
    constructor(x, y, width, height, image) {
        super({
            pos: new ex.Vector(x, y),
            width: width,
            height: height,
            anchor: ex.Vector.Zero,
        });

        const sprite = new ex.Sprite(image);
        this.graphics.use(sprite);
    }
}

export class BackgroundLvlTwo extends ex.Actor {
    constructor(x, y) {
        super({
            pos: new ex.Vector(x, y),
            height: 600,
            width: 9101,
            anchor: ex.Vector.Zero,
        });
        const sprite = Resources.BackgroundLvlTwo.toSprite();
        sprite.height = 600
        sprite.width = 9101
        this.graphics.add(sprite);
    }
}