import { Actor, Vector } from "excalibur";
import { Resources } from '../resources.js';

export class ShortcutFourth extends Actor {

    constructor() {
        super({
            width: Resources.ShortcutFour.width,
            height: Resources.ShortcutFour.height
        })
    }

    onInitialize(){

        this.graphics.add(Resources.ShortcutFour.toSprite());
        this.scale = new Vector(0.8, 0.8)

    }
}