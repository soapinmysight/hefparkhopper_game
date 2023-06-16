import {Actor, CollisionType} from "excalibur";
import {Resources} from "../resources.js";

export class MainButton extends Actor {
    constructor() {
        super({
            width: 200,
            height: 100
        });
        let button = Resources.Button.toSprite()
        button.width = 200
        button.height = 100
        this.graphics.add(button)

    }
}