import { Vector, Physics, Scene } from "excalibur";

import { BossFloor } from "./bossBottomBorder";
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

        const floor = new BossFloor();
        this.add(floor);
        floor.pos = new Vector (960, 1030);

        const character = new Maincharacter();
        this.add(character);
        character.pos = new Vector (500, 1000);

        const boss = new BossSpider();
        this.add(boss);
        boss.pos = new Vector (1000, 1000);
    }
}
