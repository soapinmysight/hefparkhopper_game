import {CollisionType, Scene, Vector, Actor} from "excalibur";
import {GameOverButton, NextLvlButton} from "../Actors/button.js";
import {BackgroundLvlTwo} from "../Actors/Background.js";
import {Maincharacter} from "../Actors/character.js";
import {Spider} from "../Actors/spiders.js";
import {ClosedPortalClass, Portal} from "../Actors/portal.js";
import * as ex from "excalibur";


export class LevelTwo extends Scene {
    game
    constructor() {
        super({
            width: 854,
            height: 600
        })
    }
    onInitialize(_engine) {
        super.onInitialize(_engine);
        this.game = _engine
    }

    onActivate(_context) {
        super.onActivate(_context);
        this.startLevelTwo()
    }

    startLevelTwo(){
        console.log('level two')

        const background = new BackgroundLvlTwo(0, 0)
        this.add(background)

        // Right invisible wall
        let leftWall = new Actor({
            pos: new Vector(-1, 0),
            width: 30,
            height: 9000000000,
            collisionType: CollisionType.Fixed
        })
        // Left invisible wall
        let rightWall = new Actor({
            pos: new Vector(background.width, 0),
            width: 30,
            height: 9000000000,
            collisionType: CollisionType.Fixed
        })
        // Roof
        let foundation = new Actor({
            pos: new Vector(0, 600),
            width: background.width,
            anchor: new Vector(0,0),
            height: 10,
            collisionType: CollisionType.Fixed
        })
        this.add(foundation)
        this.add(leftWall);
        this.add(rightWall)

        const character = new Maincharacter()
        this.add(character)
        character.on('precollision',(event) => this.onPreCollision(event))

        const spider1 = new Spider(300, 500)
        this.add(spider1)

        const portal = new Portal(8300, 350)
        this.add(portal)

        const closedPortal = new ClosedPortalClass(8100, 350)
        this.add(closedPortal)

        let victory = new GameOverButton()
        victory.pos = new Vector(400, 500)
        victory.on('pointerup', () => {
            this.game.goToScene('FailTwo')
        })
        this.add(victory)
    }
    onPreCollision(event){
        let otherActor = event.other
        if(otherActor instanceof Portal) {
            this.game.goToScene('VictoryTwo')
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
            this.game.goToScene('FailTwo')
        }
    }

    onDeactivate(_context) {
        super.onDeactivate(_context);
    }
}