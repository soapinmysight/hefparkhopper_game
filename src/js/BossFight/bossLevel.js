import { Vector, Physics, Scene } from "excalibur";

import { BossSpider } from "./boss";
import { Maincharacter } from "../Actors/character";

export class BossFight extends Scene {

    constructor(){

        super({
            width: 1920,
            height: 1080
        })

        Physics.useRealisticPhysics();
        Physics.gravity = new Vector(0, 800);

    }

    onInitialize(){

        const boss = new BossSpider();
        this.add(boss);

        const bee = new Maincharacter();
        this.add(bee);
    }
}