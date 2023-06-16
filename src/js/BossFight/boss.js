import { Actor, CollisionType, Vector } from "excalibur";
import { Resources } from '../resources.js'

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

        this.actions.repeatForever((ctx) => {

            ctx.moveBy(-80, 0, 50)

            ctx.moveBy(80, 0, 50)

        })

        this.on('collisionstart', (event) => { this.doDamage(event)});

    }

    doDamage(event){

        if(event.other instanceof Maincharacter){
            console.log("ouch!");
            event.other.takeDamage(50);                //does 50 damage to main character
        }

    }

    getHit(amount){

        this.health -= amount;

        if(this.health < 1) {
            this.kill();
        }

    }
}