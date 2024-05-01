import {Scene, Vector} from "excalibur";
import {GameOverButton, NextLvlButton, StartButton} from "../Actors/button.js";
import {CutsceneStartEndBackground} from "../cutScene/actors/background.js";
import { Logo } from "../Actors/logo.js"
// import { ShortcutFirst } from "../Actors/shortcut1.js";
// import { ShortcutSecond } from "../Actors/shortcut2.js";
// import { ShortcutThird } from "../Actors/shortcut3.js";
// import { ShortcutFourth } from "../Actors/shortcut4.js";

export class Start extends Scene {

    game

    constructor() {
        super();
    }

    onInitialize(_engine) {
        super.onInitialize(_engine);
        this.game = _engine
    }

    onActivate(_context) {
        super.onActivate(_context);
        this.startScene()
    }

    startScene(){
        this.actors.forEach((actor) => actor.kill());

        let background = new CutsceneStartEndBackground(-150,0)
        this.add(background)
        console.log(background)

        const logo = new Logo();
        this.add(logo);
        logo.pos = new Vector(600,200);

        console.log('startscherm')
        let start = new StartButton()
        start.pos = new Vector(600, 450)
        start.on('pointerup', () => {
            this.game.goToScene('startCutscene')
        })
        this.add(start)

        // let levelTwo = new ShortcutSecond()
        // levelTwo.pos = new Vector(100, 150)
        // levelTwo.on('pointerup', () => {
        //     this.game.goToScene('firstCutscene')
        // })
        //
        // this.add(levelTwo)
        //
        //
        // let levelThree = new ShortcutThird()
        // levelThree.pos = new Vector(100, 270)
        // levelThree.on('pointerup', () => {
        //     this.game.goToScene('secondCutscene')
        // })
        //
        // this.add(levelThree)
        //
        // let PreBossfight = new ShortcutFourth()
        // PreBossfight.pos = new Vector(100, 400)
        // PreBossfight.on('pointerup', () => {
        //     this.game.goToScene('thirdCutScene')
        // })
        //
        // this.add(PreBossfight)
        //
        // let finalCutscene = new GameOverButton()
        // finalCutscene.pos = new Vector(1050, 500)
        // finalCutscene.on('pointerup', () => {
        //     this.game.goToScene('bossCutscene')
        // })
        //
        // this.add(finalCutscene)
    

    }
}