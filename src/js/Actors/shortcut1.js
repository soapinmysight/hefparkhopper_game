import { Actor, Vector } from "excalibur";
import { Resources } from '../resources.js';

export class ShortcutFirst extends Actor {

    constructor() {
        super({
            width: Resources.ShortcutOne.width,
            height: Resources.ShortcutOne.height
        })
    }

    onInitialize(){

        this.graphics.add(Resources.ShortcutOne.toSprite());
        // this.scale = new Vector(0.2, 0.2)

    }
}