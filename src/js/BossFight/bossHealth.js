import { Actor, Vector, Color, Sprite, Rectangle } from 'excalibur'

export class BossHealthBar extends Actor {

    healthbar;

    constructor(){

        super({ 
            width: 165, 
            height: 30 
        })

        this.healthrectangle = new Rectangle({
            width: 165,
            height: 30,
            color: Color.Red,
        })

        this.graphics.use(this.healthrectangle)
    }
}