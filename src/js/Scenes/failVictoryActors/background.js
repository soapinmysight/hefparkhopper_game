import {Actor, Vector} from 'excalibur';
import {Resources} from "/src/js/resources.js";


export class OneFailVicBackground extends Actor {
    constructor(x, y) {
        super({
            pos: new Vector(x, y),
            width: 1700,
            height: 600,
            anchor: Vector.Zero,
        });

        const spriteOne = Resources.FailVicOneBg.toSprite();
        spriteOne.width = 1700
        spriteOne.height = 600
        this.graphics.add(spriteOne);
    }
}

export class TwoFailVicBackground extends Actor {
    constructor(x, y) {
        super({
            pos: new Vector(x, y),
            width: 1410,
            height: 600,
            anchor: Vector.Zero,
        });
        const sprite = Resources.FailVicTwoBg.toSprite();
        sprite.width = 1410
        sprite.height = 600
        this.graphics.add(sprite);
    }
}

export class ThreeFailVicBackground extends Actor {
    constructor(x, y) {
        super({
            pos: new Vector(x, y),
            width: 2059,
            height: 600,
            anchor: Vector.Zero,
        });
        const sprite = Resources.FailVicThreeBg.toSprite();
        sprite.width = 2059
        sprite.height = 600
        this.graphics.add(sprite);
    }
}
export class BossFailVicBackground extends Actor {
    constructor(x, y) {
        super({
            pos: new Vector(x, y),
            width: 1726,
            height: 600,
            anchor: Vector.Zero,
        });
        const sprite = Resources.FailVicBossBg.toSprite();
        sprite.height = 600
        sprite.width = 1726
        this.graphics.add(sprite);
    }
}
