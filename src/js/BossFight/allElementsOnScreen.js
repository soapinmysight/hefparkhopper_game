import { Actor, Vector, Color, Sprite, Rectangle, ScreenElement, Font, FontUnit, Text, GraphicsGroup } from 'excalibur'

export class UI extends ScreenElement {

    healthbar;
    group;

    constructor(){

        super({ x: 10, y:10 });

        this.healthbar = new Rectangle({
            width: 300,
            height: 40,
            color: Color.Red,
        });

        this.border = new Rectangle({
            width: 300,
            height: 40,
            color: Color.fromRGB(255,255,255,0.4)
        });

        // this.graphics.use(this.healthbar);
    }

    onInitialize(engine){

        this.levelText = new Text({
            text: 'Final boss',
            font: new Font({
                unit: FontUnit.Px,
                family: 'Arial',
                size: 40,
            }),
        })

        this.scoreText = new Text({
            text: 'points:',
            font: new Font({
                unit: FontUnit.Px,
                family: 'Arial',
                size: 30,
            }),
        })

        // this.graphics.add(this.levelText);
        // this.graphics.add(this.scoreText);

        this.group = new GraphicsGroup({
            members: [
                {
                    graphic: this.levelText,
                    pos: new Vector(10, 5),
                },
                {
                    graphic: this.scoreText,
                    pos: new Vector(10, 30),
                },
                {
                    graphic: this.border,
                    pos: new Vector(800, 200),
                },
                {
                    graphic: this.healthbar,
                    pos: new Vector(800, 200),
                },
            ]
        })
        this.graphics.use(this.group);
    }

    resetHealth(){
        this.healthbar.width = 300;
    }

    bossDamaged(currentHealth) {

        this.healthbar.width = currentHealth;
        
        if (this.healthbar.width <= 0) {
            console.log("congrasjulashions");
        }
    }
}