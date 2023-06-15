import { ImageSource, Sound, Resource, Loader } from 'excalibur'
import beeImage from "../images/bee2.png"
import spiderImage from "../images/spoeder.png"
import buttonImage from "../images/button.png"
import flowerImage from "../images/flower.png"

const Resources = {
    Bee: new ImageSource(beeImage),
    Spider: new ImageSource(spiderImage),
    Button: new ImageSource(buttonImage),
    Flower: new ImageSource(flowerImage)
}
const ResourceLoader = new Loader([
    Resources.Bee,
    Resources.Spider,
    Resources.Button,
    Resources.Flower
])

export { Resources, ResourceLoader }