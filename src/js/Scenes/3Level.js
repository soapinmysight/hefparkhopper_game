import {Scene, Vector} from "excalibur";
import {GameOverButton, NextLvlButton} from "../Actors/button.js";
import {Spider} from "../Actors/spiders.js";
import {ClosedPortalClass, Portal} from "../Actors/portal.js";
import {Maincharacter} from "../Actors/character.js";

export class LevelThree extends Scene {
    game
    health
    score
    character
    constructor(score) {
        super({});
        this.score = score
    }
    onInitialize(_engine) {
        super.onInitialize(_engine);
        this.game = _engine
    }
    onActivate(_context) {
        super.onActivate(_context);
        this.startLevelThree()
    }
    startLevelThree(){

        this.actors.forEach((actor) => actor.kill());

        console.log('level three')

        const character = new Maincharacter()
        this.add(character)
        character.on('precollision',(event) => this.onPreCollision(event))


        let gameOverButton = new GameOverButton()
        gameOverButton.pos = new Vector(400, 500)
        gameOverButton.on('pointerup', () => {
            this.game.goToScene('FailThree')
        })
        this.add(gameOverButton)

        let nextLvlButton = new NextLvlButton()
        nextLvlButton.pos = new Vector(600, 500)
        nextLvlButton.on('pointerup', () => {
            this.game.goToScene('VictoryThree')
        })
        this.add(nextLvlButton)
    }
    onPreCollision(event){
        let otherActor = event.other
        if(otherActor instanceof Portal) {
            this.game.goToScene('VictoryThree')
        }
    }

    onPostUpdate(_engine, _delta) {
        super.onPostUpdate(_engine, _delta);
        const allSpiders = this.actors.filter((actor) => actor instanceof Spider);
        const allSpidersDead = allSpiders.every((egg) => egg.isKilled());

        if (allSpidersDead === true) {
            // Remove ClosedPortal if it exists
            const closedPortal = this.actors.find((actor) => actor instanceof ClosedPortalClass);
            if (closedPortal) {
                closedPortal.kill();
            }

            // Add Portal if it doesn't exist
            const portal = this.actors.find((actor) => actor instanceof Portal);
            if (!portal) {
                const newPortal = new Portal(8300, 350);
                this.add(newPortal);
            }
        }

        const mainCharacter = this.actors.find((actor) => actor instanceof Maincharacter);

        if (!mainCharacter) {
            this.game.goToScene('FailThree')
        }
    }

}