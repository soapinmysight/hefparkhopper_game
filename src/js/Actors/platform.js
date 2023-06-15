import * as ex from 'excalibur'
import { Resources, ResourceLoader } from '../resources';

export class Platform extends ex.Actor {
    
    constructor() {

        super({
            height: Resources.Platform.height,
            width: Resources.Platform.width
        });

    }

    onInitialize(){

        this.graphics.use(Resources.Platform.toSprite());
        this.scale = new ex.Vector(0.25,0.25);

    }
}