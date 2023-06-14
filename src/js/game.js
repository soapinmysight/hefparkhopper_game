import '../css/style.css'
import { Actor, Engine, Vector } from "excalibur"
import { Resources, ResourceLoader } from './resources.js'
import { Maincharacter } from './Actors/character'

export class Game extends Engine {

    constructor() {
        super({ width: 800, height: 600 })
        this.start(ResourceLoader).then(() => this.startGame())

    }


    startGame(engine) {
        console.log("start de game!")
        const player = new Maincharacter()

        this.add(player)



    }
}

new Game()
