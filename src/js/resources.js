import { ImageSource, Sound, Resource, Loader } from 'excalibur'
import beeImage from "../images/bee2.png"
import spiderImage from "../images/spoeder.png"
import buttonImage from "../images/button.png"
import backgroundImage from "../images/background.png"
import flowerImage from "../images/flower.png"
import platformImage from "../images/platform.png"

const Resources = {
    Bee: new ImageSource(beeImage),
    Spider: new ImageSource(spiderImage),
    Button: new ImageSource(buttonImage),
    Background: new ImageSource(backgroundImage),
    Flower: new ImageSource(flowerImage),
    Platform: new ImageSource(platformImage)

}
const ResourceLoader = new Loader([
    Resources.Bee,
    Resources.Spider,
    Resources.Button,
    Resources.Background,
    Resources.Flower,
    Resources.Platform,
])

export { Resources, ResourceLoader }
