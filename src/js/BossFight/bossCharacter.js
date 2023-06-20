import { Actor, CollisionType, Vector, Shape, Input, Timer } from "excalibur";
import { Resources, ResourceLoader } from '../resources.js';

import { BossFloor } from "./bossBottomBorder.js";

export class MaincharacterBoss extends Actor {

    health = 100;
    damage
    grounded
    timer


    constructor(){

        const circle = Shape.Circle(105, new Vector(6, 27.5));

        super({
            height: 100,
            width: 100,
            collider: circle
        });

        this.timer = new Timer({
            fcn: () => this.graphics.use('HappyBee'),      //dit is een timer waarmee ik de graphics van de bee weer terug naar
            repeats: false,                                //normaal zet na het aanvallen (tijdens aanval verandert de image naar madBee)
            interval: 1000,
        })
    }

    // onActivate(ctx) {

    //     this.MaincharacterBoss.pos = new Vector(10, 500);         //dit gaan we later nodig hebben met het resetten van de levels
    //     this.MaincharacterBoss.reset();
    // }

    onInitialize(engine){

        this.game = engine;

        this.body.useGravity = true;

        this.body.collisionType = CollisionType.Active;

        this.graphics.add('HappyBee',Resources.Bee.toSprite());     //de sprite toevoegen voor de normale bee
        this.graphics.add('MadBee',Resources.MadBee.toSprite());    //de sprite toevoegen voor de aanval bee
        this.graphics.add('SadBee',Resources.SadBee.toSprite());    //de sprite toevoegen voor de sad bee (wanneer hij damage neemt)
        this.scale = new Vector (0.5,0.5);                                 //de verschillende sprites hebben jullie niet nodig aangezien
                                                                           //jullie geen attack met "bullets" hebben

        this.graphics.use('HappyBee');                              //de default graphics instellen

        this.on('collisionstart', (event) => { this.isGrounded(event)} );   //checken of er collision is

        this.game.currentScene.add(this.timer);                     //de timer toevoegen aan de scene
    }

    reset(){

        this.graphics.use('HappyBee');                              //de reset functie voor wanneer je het level opnieuw wilt doen
        this.health = 100;
        
    }

    isGrounded(event){
        //console.log("Collsion start");
        if(event.other instanceof BossFloor){                       //checken of er collision is met de vloer
            console.log("you're on the floor");
            this.grounded = true;
        } 

        // if(event.other instanceof Platform){
        //     console.log("you're on a platform");                 //checken of er collision is met een plaform
        //     this.grounded = true;                                //(heb zelf nog geen platform vandaar comment)
        // } 
 
    }

    onPreUpdate(engine) {

        let xspeed = 0;                                           //set de xspeed op 0
        let yspeed = 0;                                           //set de yspeed op 0


        if(engine.input.keyboard.isHeld(Input.Keys.D)) {          //voor uit bewegen met D
           xspeed = 240;
        }

        if(engine.input.keyboard.isHeld(Input.Keys.A)) {          //achter uit bewegen met A
            xspeed = -240;
        }

        //console.log(this.grounded)
        
        if(this.grounded) {
            if(engine.input.keyboard.wasPressed(Input.Keys.Space)) {       //springen met space
                yspeed = -500;
                this.grounded = false;
            }
        
            if(engine.input.keyboard.wasPressed(Input.Keys.B)) {           //dubbel jump voor het geval je die wilt toevoegen
                yspeed = -650;                                             //zo niet kan je gwn deleten:)
                this.grounded = false;
            }
        }

        // if(engine.input.keyboard.wasPressed(Input.Keys.L)) {
        //     this.attack();                                              //attack, moet ik nog maken en dus is nog commented
        //     this.graphics.use('MadBubbles');                            //keybind zal nog veranderen, is nog van mn oude code
        //     this.timer.start();
        // }

        this.vel = new Vector(
            xspeed ,                                 //de "nieuwe"/ current speed instellen/updaten
            this.vel.y + yspeed
        )

    }

    takeDamage(amount){                              //de functie voor het nemen van damage

        console.log("I take damage " + amount);      //hier word de hoeveelheid damage uit de paramaters van de totale health afgehaald
        this.health -= amount;

        this.graphics.use('SadBee');                 //hier word de sad bee graphics geactiveerd wanneer de bee geraakt word
        this.timer.start();                          //hier word de timer gestart om de graphics na een seconde weer terug te zetten naar normaal

        if(this.health < 76) {                       //hier ga ik gebaseerd op de hoeveelheid health, een parameter meegeven aan de scene
            this.scene.hearts(3);                    //wat word ontvangen in een hearts functie. deze zal weer een parameter meegeven
        }                                            //aan een functie binnen een class die UI zal heten. hier in zullen de punten,
                                                     //de flowers en de hearts te zien zijn. gebaseerd op de parameters zullen er hearts
        if(this.health < 51) {                       //worden verwijderd
            this.scene.hearts(2);
        }

        if(this.health <26) {
            this.scene.hearts(1);
        }

        if(this.health < 1 ){
            console.log("oopsies, dead")             //hier ben je game over:'(
            // this.game.goToScene('gameOver', new GameOver());
        }
    }

    // attack(){

    //     const bubBullet = new BubBullets();       //code voor de attack
    //     bubBullet.pos = this.pos.clone();
    //     this.scene.add(bubBullet);

    // }

}
