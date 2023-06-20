import { Vector, Physics, Scene, Actor, CollisionType } from "excalibur";

import { BossFloor } from "./bossBottomBorder";
import { BossSpider } from "./boss";
import { Maincharacter } from "../Actors/character";
import { Resources } from "../resources";
import { BackgroundBoss } from "./bossBackground";

export class BossFight extends Scene {

    ding

    constructor(){

        super({
            width: 854,
            height: 600
        })

        Physics.useRealisticPhysics();
        Physics.gravity = new Vector(0, 800);
        
    }

    onInitialize(engine){

        const backgroundBoss = new BackgroundBoss();
        this.add(backgroundBoss);
        backgroundBoss.pos = new Vector (427, 210);

        const floor = new BossFloor();
        this.add(floor);
        floor.pos = new Vector (427  , 640);

        const character = new Maincharacter();
        this.add(character);
        character.pos = new Vector (400  , 0);

        const boss = new BossSpider();
        this.add(boss);
        boss.pos = new Vector (800  , 500);
    }
}
