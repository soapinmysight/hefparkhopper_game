import { ImageSource, Sound, Resource, Loader } from 'excalibur'
import fishImage from '../images/fish.png'
import beeImage from "../images/bee.png"
import spiderImage from "../images/spider.png"
import buttonImage from "../images/button.png"

const Resources = {
    Fish: new ImageSource(fishImage),
    Bee: new ImageSource(beeImage),
    Spider: new ImageSource(spiderImage),
    Button: new ImageSource(buttonImage)
}
const ResourceLoader = new Loader([
    Resources.Fish,
    Resources.Bee,
    Resources.Spider,
    Resources.Button
])

export { Resources, ResourceLoader }