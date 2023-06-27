import {Actor, Vector} from "excalibur";
import {Resources} from "../../resources.js";

export class FailText extends Actor {
    constructor(x,y) {
        super({
            pos: new Vector(x,y),
            width: 400,
            height: 168,
            anchor: new Vector(0.5,0.5)
        });
        const fail = Resources.FailText.toSprite()
        fail.width = 400
        fail.height = 168
        this.graphics.add(fail)
    }
}

export class VictoryText extends Actor {
    constructor(x,y) {
        super({
            pos: new Vector(x,y),
            width: 400,
            height: 168
        });
        const victory = Resources.VictoryText.toSprite()
        victory.width = 400
        victory.height = 168
        this.graphics.add(victory)
    }
}