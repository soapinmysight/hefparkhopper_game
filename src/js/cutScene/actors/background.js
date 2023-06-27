import {Actor, Vector} from 'excalibur';
import {Resources} from "/src/js/resources.js";

export class BaseBackground extends Actor {
    constructor(x, y) {
        super({
            pos: new Vector(x, y),
            anchor: Vector.Zero,
        });
    }
}

export class CutsceneStartEndBackground extends BaseBackground {
    constructor() {
        super();
        const sprite = Resources.StartAndFinalSceneBg.toSprite();
        this.graphics.add(sprite);
    }
}

export class CutsceneOneBackground extends BaseBackground {
    constructor() {
        super(        );
        const sprite = Resources.CutsceneOneBg.toSprite();
        this.graphics.add(sprite);
    }
}

export class CutsceneTwoBackground extends BaseBackground {
    constructor() {
        super();
        const sprite = Resources.CutsceneTwoBg.toSprite();
        this.graphics.add(sprite);
    }
}
export class CutsceneThreeBackground extends BaseBackground {
    constructor() {
        super();
        const sprite = Resources.CutsceneThreeBg.toSprite();
        this.graphics.add(sprite);
    }
}
export class CutsceneBossBackground extends BaseBackground {
    constructor() {
        super();
        const sprite = Resources.CutsceneBossBg.toSprite();
        this.graphics.add(sprite);
    }
}
