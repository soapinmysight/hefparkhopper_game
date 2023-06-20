import { Vector, Physics, Scene, Actor, CollisionType } from "excalibur";
import { Resources } from "../resources";

import { BossFloor } from "./bossBottomBorder";
import { BossSpider } from "./boss";
import { MaincharacterBoss } from "./bossCharacter";
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
        backgroundBoss.pos = new Vector (580, 210);

        let leftWall = new Actor({
            pos: new Vector(-10, 0),
            width: 30,
            height: 9000000000,
            collisionType: CollisionType.Fixed
        })

        this.add(leftWall);

        let rightWall = new Actor({
            pos: new Vector (1265, 0),
            width: 30,
            height: 9000000000,
            collisionType: CollisionType.Fixed
        })

        this.add(rightWall);

        const floor = new BossFloor();
        this.add(floor);
        floor.pos = new Vector (427  , 640);

        const character = new MaincharacterBoss();
        this.add(character);
        character.pos = new Vector (130  , 525);

        const boss = new BossSpider();
        this.add(boss);
        boss.pos = new Vector (1000  , 480);
    }
}
