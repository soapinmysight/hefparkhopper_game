import { Actor, Vector } from "excalibur";
import { Resources } from '../resources.js';

export class ShortcutThird extends Actor {

    constructor() {
        super({
            width: Resources.ShortcutThree.width,
            height: Resources.ShortcutThree.height
        })
    }

    onInitialize(){

        this.graphics.add(Resources.ShortcutThree.toSprite());
        this.scale = new Vector(0.8, 0.8)

    }
}