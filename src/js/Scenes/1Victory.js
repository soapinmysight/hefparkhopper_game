import { Scene, Vector, Font, Label, FontUnit, Color } from "excalibur";
import { NextLvlButton, TryAgainButton } from "../Actors/button.js";
import { OneFailVicBackground } from "./failVictoryActors/background.js";
import { VictoryText } from "./failVictoryActors/text.js";
import victoryMusic from "../../sounds/Victory.mp4"

export class VictoryOne extends Scene {
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
        this.victoryMusic = new Audio(victoryMusic)
        this.victoryMusic.loop = true
        this.victoryMusic.play()
        this.startVictoryOne()
    }
    startVictoryOne() {
        this.actors.forEach((actor) => actor.kill());
        console.log('victory one')
        let background = new OneFailVicBackground(-100, 0)
        this.add(background)
        console.log(background)

        let victory = new VictoryText(screen.width / 2 - 100, 150)
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

        let nextLvlButton = new NextLvlButton()
        nextLvlButton.pos = new Vector(650, 500)
        nextLvlButton.on('pointerup', () => {
            this.game.goToScene('startScene')
            this.victoryMusic.pause()
        })
        this.add(nextLvlButton)
    }

}