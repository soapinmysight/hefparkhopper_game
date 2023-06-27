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
        super(200, 120);
        const btn = Resources.StartBtn.toSprite()
        btn.width = 200
        btn.height = 120
        this.graphics.add(btn)
    }
}

export class GameOverButton extends MainButton {
    constructor() {
        super(350, 120);
        const btn = Resources.GameOverBtn.toSprite()
        btn.width = 350
        btn.height = 120
        this.graphics.add(btn)
    }
}
export class NextLvlButton extends MainButton {
    constructor() {
        super(350, 120);
        const btn = Resources.NextLvlBtn.toSprite()
        btn.width = 350
        btn.height = 120
        this.graphics.add(btn)
    }
}

export class TryAgainButton extends MainButton {
    constructor() {
        super(350, 120);
        const btn = Resources.TryAgainBtn.toSprite()
        btn.width = 350
        btn.height = 120
        this.graphics.add(btn)
    }
}