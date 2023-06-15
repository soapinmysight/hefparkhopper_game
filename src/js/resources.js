import { ImageSource, Sound, Resource, Loader } from 'excalibur'
import beeImage from "../images/bee2.png"
import spiderImage from "../images/spoeder.png"
import buttonImage from "../images/button.png"

const Resources = {
    Bee: new ImageSource(beeImage),
    Spider: new ImageSource(spiderImage),
    Button: new ImageSource(buttonImage)
}
const ResourceLoader = new Loader([
    Resources.Bee,
    Resources.Spider,
    Resources.Button
])

export { Resources, ResourceLoader }