import {Actor, Vector} from "excalibur";
import {Resources} from "../../resources.js";


export class CsBee extends Actor {
    constructor(x, y) {
        super({
            pos: new Vector(x, y),
            anchor: Vector.Zero
        });
        this.graphics.use(Resources.Bee.toSprite())
        this.scale = new Vector(0.4, 0.4)
    }
}

export class CsBeeSad extends Actor {
    constructor(x, y) {
        super({
            pos: new Vector(x, y),
            anchor: Vector.Zero
        });
        this.graphics.use(Resources.SadBee.toSprite())
        this.scale = new Vector(0.4, 0.4)
    }
}

export class CsBeeMad extends Actor {
    constructor(x, y) {
        super({
            pos: new Vector(x, y),
            anchor: Vector.Zero
        });
        this.graphics.use(Resources.MadBee.toSprite())
        this.scale = new Vector(0.4, 0.4)
    }
}
export class CsBeeHappy extends Actor {
    constructor(x, y) {
        super({
            pos: new Vector(x, y),
            anchor: Vector.Zero
        });
        this.graphics.use(Resources.HappiestBee.toSprite())
        this.scale = new Vector(0.4, 0.4)
    }
}

export class CsBeeBaby extends Actor {
    constructor(x, y) {
        super({
            pos: new Vector(x, y),
            anchor: Vector.Zero
        });
        this.graphics.use(Resources.Bee.toSprite())
        this.scale = new Vector(0.2, 0.2)
    }
}

export class CsSpider extends Actor {
    constructor(x, y) {
        super({
            pos: new Vector(x, y),
            anchor: Vector.Zero
        });
        this.graphics.use(Resources.Boss.toSprite())
        this.scale = new Vector(1.3, 1.3)
    }
}

export class CsSpiderDead extends Actor {
    constructor(x, y) {
        super({
            pos: new Vector(x, y),
            anchor: Vector.Zero
        });
        this.graphics.use(Resources.DeadCutsceneSpider.toSprite())
        this.scale = new Vector(1.3, 1.3)
    }
}