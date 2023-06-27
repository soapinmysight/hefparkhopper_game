import {Color, Font, FontUnit, Label, Scene, Vector} from "excalibur";
import {NextLvlButton} from "../Actors/button.js";
import {VictoryText} from "../Scenes/failVictoryActors/text.js";
import {BossFailVicBackground} from "../Scenes/failVictoryActors/background.js";

export class VictoryBoss extends Scene {
    game
    score
    constructor(score) {
        super();
        this.score = score
    }
    onInitialize(_engine) {
        super.onInitialize(_engine);
        this.game = _engine
    }
    onActivate(_context) {
        super.onActivate(_context);
        this.startVictoryBoss()
    }
    startVictoryBoss(){
        this.actors.forEach((actor) => actor.kill());
        console.log('victory boss')
        let background = new BossFailVicBackground(0,0)
        this.add(background)

        let victory = new VictoryText(screen.width/2-100, 150)
        this.add(victory)

        let label2 = new Label({
            text: `Score: ${this.score}`,
            pos: new Vector(500, 400),
            font: new Font({
                family: 'impact',
                size: 35,
                unit: FontUnit.Px,
                color: Color.White
            })
        })
        this.add(label2)
        let label3 = new Label({
            text: `You've finished the game`,
            pos: new Vector(500, 300),
            font: new Font({
                family: 'impact',
                size: 35,
                unit: FontUnit.Px,
                color: Color.White
            })
        })
        this.add(label3)

        let nextLvlButton = new NextLvlButton()
        nextLvlButton.pos = new Vector(650, 500)
        nextLvlButton.on('pointerup', () => {
            this.game.goToScene('secondCutscene')
        })
        this.add(nextLvlButton)

    }

}





