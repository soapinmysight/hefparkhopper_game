import { Actor, Vector, CollisionType } from "excalibur"
import { Resources } from "../resources.js"

import { MaincharacterBoss } from "./bossCharacter.js"
import { BossFloor } from "./bossBottomBorder.js"
import BossattackSound from "../../sounds/Bossattack.mp3"
import MissSound from "../../sounds/Miss.mp4"
import DamageSound from "../../sounds/Damage.mp3"

export class SpiderWebShot extends Actor {

    constructor() {
        super({
            width: 90,
            height: 90
        })
    }

    onInitialize(engine) {

        this.game = engine;

        this.body.useGravity = false;

        this.graphics.use(Resources.BossWeb.toSprite());
        this.BossattackSound = new Audio(BossattackSound)
        this.BossattackSound.play()

        this.on("collisionstart", (event) => this.spiderWeb(event));
    }

    spiderWeb(event) {

        if (event.other instanceof MaincharacterBoss) {
            event.other.takeDamage(50);
            this.kill();
            this.DamageSound = new Audio(DamageSound)
            this.DamageSound.play()
        }

        if (event.other instanceof BossFloor) {
            this.kill();
            this.MissSound = new Audio(MissSound)
            this.MissSound.play()
        }
    }
}