import { Actor, CollisionType, Vector } from "excalibur";
import { Resources } from '../resources.js'

import { Maincharacter } from "../Actors/character.js";
import { MaincharacterBoss } from "./bossCharacter.js";

export class BossSpider extends Actor {

    health = 10000;

    constructor(){
        super({
            width: Resources.Boss.width,
            height: Resources.Boss.height
        })
    }

    onInitialize(){

        this.body.collisionType = CollisionType.Fixed

        this.graphics.add(Resources.Boss.toSprite());
        this.scale = new Vector (1.3, 1.3)

        this.actions.repeatForever((ctx) => {

            ctx.moveBy(-100, 0, 50)

            ctx.moveBy(100, 0, 50)

        })

        this.on('collisionstart', (event) => { this.doDamage(event)});

    }

    doDamage(event){

        if(event.other instanceof MaincharacterBoss){
            console.log("ouch!");
            // event.other.takeDamage(50);                //does 50 damage to main character
        }

    }

    getHit(amount){

        this.health -= amount;

        if(this.health < 1) {
            this.kill();
        }

    }
}