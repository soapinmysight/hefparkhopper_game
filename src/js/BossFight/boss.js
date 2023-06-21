import { Actor, CollisionType, Vector, Timer } from "excalibur";
import { Resources } from '../resources.js'

import { MaincharacterBoss } from "./bossCharacter.js";
import { SpiderWebShot } from "./bossAttack.js";

export class BossSpider extends Actor {

    health = 10000;
    timer;

    constructor(){

        super({
            width: Resources.Boss.width,
            height: Resources.Boss.height
        })

        this.timer = new Timer({
            fcn: () => this.webShot(),      
            repeats: true,                   
            interval: 4000,
        })

    }

    onInitialize(engine){

        this.game = engine

        this.body.collisionType = CollisionType.Fixed

        this.graphics.add(Resources.Boss.toSprite());
        this.scale = new Vector (1.3, 1.3)

        this.actions.repeatForever((ctx) => {

            ctx.moveBy(-100, 0, 50)

            ctx.moveBy(100, 0, 50)

        })

        this.game.currentScene.add(this.timer);  
        this.timer.start();

        this.on('collisionstart', (event) => { this.doDamage(event)});

    }

    doDamage(event){

        if(event.other instanceof MaincharacterBoss){
            console.log("ouch!");
            event.other.takeDamage(50);                //does 50 damage to main character
        }

    }

    hitBoss(amount){

        this.health -= amount;

        if(this.health < 1) {
            this.timer.stop();
            this.kill();
            console.log("Victory for you, whoo hoo")
        }

    }

    webShot() {

        const webShoot = new SpiderWebShot();
        webShoot.pos = this.pos.clone();
        // this.scene.add(webShoot);
        this.scene.addWebShot(webShoot)

    }
}