import { Actor, Vector } from "excalibur";
import { Resources } from '../resources.js';

export class ShortcutSecond extends Actor {

    constructor() {
        super({
            width: Resources.ShortcutTwo.width,
            height: Resources.ShortcutTwo.height
        })
    }

    onInitialize(){

        this.graphics.add(Resources.ShortcutTwo.toSprite());
        this.scale = new Vector(0.8, 0.8)

    }
}