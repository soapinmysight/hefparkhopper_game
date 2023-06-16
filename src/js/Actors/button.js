import {Actor, CollisionType} from "excalibur";
import {Resources} from "../resources.js";

export class MainButton extends Actor {
    constructor(width, height) {
        super({
            width: width,
            height: height,
        });
        this.enableCapturePointer = true
        this.pointer.useGraphicsBounds = true

    }
}

export class StartButton extends MainButton {
    constructor() {
        super(200, 150);
        const btn = Resources.StartBtn.toSprite()
        btn.width = 200
        btn.height = 120
        this.graphics.add(btn)
    }
}

export class GameOverButton extends MainButton {
    constructor() {
        super(200, 150);
        const btn = Resources.GameOverBtn.toSprite()
        this.graphics.add(btn)
    }
}
export class NextLvlButton extends MainButton {
    constructor() {
        super(200, 150);
        const btn = Resources.NextLvlBtn.toSprite()
        this.graphics.add(btn)
    }
}

export class TryAgainButton extends MainButton {
    constructor() {
        super(200, 150);
        const btn = Resources.TryAgainBtn.toSprite()
        this.graphics.add(btn)
    }
}