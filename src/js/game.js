import '../css/style.css'
import * as ex from "excalibur"
import { Resources, ResourceLoader } from './resources.js'
import { Maincharacter } from './Actors/character'
import { platform } from './platform.js'
import { Background } from './Background.js'


export class Game extends ex.Engine {

    constructor() {
        super({
            width: 800,
            height: 600
        })
        this.start(ResourceLoader).then(() => this.startGame())
        ex.Physics.useRealisticPhysics();
        ex.Physics.acc = ex.vec(0, 300);
        // this.currentScene.ex.camera.strategy.lockToActorAxis(actor, ex.Axis.X)

    }


    startGame() {

        console.log("start de game!")
        const player = new Maincharacter()
        this.add(player)



        const backgroundImage = Resources.Fish.toSprite();
        const background = new Background(0, 80, 200, 20, backgroundImage);
        this.add(background);

        const platform1 = new platform(0, 580, 2000, 20, ex.Color.Green);
        this.add(platform1);

        const platform2 = new platform(0, 380, 200, 20, ex.Color.Green);
        this.add(platform2);


        // this.camera.strategy.lockToActor(this.player)
    }
}

new Game()
