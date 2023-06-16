import {Scene} from "excalibur";

export class BossFight extends Scene {
    constructor() {
        super();
    }
    onActivate(_context) {
        super.onActivate(_context);
        console.log("bossfight")
    }
}