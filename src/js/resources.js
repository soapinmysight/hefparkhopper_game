import { ImageSource, Loader } from 'excalibur'

import backgroundImage from "../images/background2.png"
import platformImage from "../images/platform.png"
import spikeImage from "../images/spikes.png"


import beeImage from "../images/bee2.png"
import spiderImage from "../images/spoeder.png"

import flowerImage from "../images/flower.png"

import buttonImage from "../images/button.png"
import startBtnImage from "../images/startButton.png"
import tryAgainBtnImage from "../images/tryAgain.png"
import nextLvlBtnImage from "../images/nextLevelButton.png"
import gameOverBtnImage from "../images/gameOverButton.png"

import logoImage from "../images/logo.png"

import textBubbleImage from "../images/textBubble.png"

// import Bottomborder from "../images/bottomBorder.png"

const Resources = {

    Background: new ImageSource(backgroundImage),
    Platform: new ImageSource(platformImage),
    Spikes: new ImageSource(spikeImage),

    Bee: new ImageSource(beeImage),
    Spider: new ImageSource(spiderImage),

    Flower: new ImageSource(flowerImage),

    Button: new ImageSource(buttonImage),
    StartBtn: new ImageSource(startBtnImage),
    TryAgainBtn: new ImageSource(tryAgainBtnImage),
    NextLvlBtn: new ImageSource(nextLvlBtnImage),
    GameOverBtn: new ImageSource(gameOverBtnImage),

    Logo: new ImageSource(logoImage),

    TextBubble: new ImageSource(textBubbleImage)

    // BottomBorder: new ImageSource(Bottomborder)

}
const ResourceLoader = new Loader([
    Resources.Background,
    Resources.Platform,
    Resources.Spikes,

    Resources.Bee,
    Resources.Spider,

    Resources.Flower,

    Resources.Button,
    Resources.StartBtn,
    Resources.TryAgainBtn,
    Resources.NextLvlBtn,
    Resources.GameOverBtn,

    Resources.Logo,

    Resources.TextBubble

    // Resources.BottomBorder
])

export { Resources, ResourceLoader }
