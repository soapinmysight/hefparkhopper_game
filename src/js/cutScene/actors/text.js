import {Actor, Vector, Sprite} from "excalibur";

export class CsTextBox extends Actor {
    constructor(image) {
        super({
            pos: new Vector(650, 450),
            width: 900,
            height: 227,
            anchor: new Vector(0.5,0.5),
        });

        const sprite = new Sprite(image);
        sprite.width = 900
        sprite.height = 227
        this.graphics.use(sprite);
    }
}

