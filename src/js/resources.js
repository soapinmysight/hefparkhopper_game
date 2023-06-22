import { ImageSource, Loader } from 'excalibur'

// level one
import backgroundImage from "../images/background2.png"
import platformImage from "../images/platform.png"
import spikeImage from "../images/spikes.png"

// level two

import backgroundLvTwoImg from "../images/bglvl2.png"
import platformLvTwoImg from "../images/platformlvl2.png"
import spikesLvlTwoImg from "../images/spikeslvl2.png"

// characters
import beeImage from "../images/bee2.png"
import sadBee from "../images/sadBee.png"
import madBee from "../images/madBee.png"
import happiestBee from "../images/happiestBee.png"

import spiderImage from "../images/spoeder.png"

import flowerImage from "../images/flower.png"

// buttons
import buttonImage from "../images/button.png"
import startBtnImage from "../images/startButton.png"
import tryAgainBtnImage from "../images/tryAgain.png"
import nextLvlBtnImage from "../images/nextLevelButton.png"
import gameOverBtnImage from "../images/gameOverButton.png"

import logoImage from "../images/logo.png"

import textBubbleImage from "../images/textBubble.png"

// bossfight
import boss from "../images/bossSpider.png"
import bossHit from "../images/bossspiderhit.png"
import honeyBomb from "../images/honeyBomb.png"
import bossWeb from "../images/bossWeb.png"
import bossFloorTemp from "../images/tempFloorBoss.png"
import bossBackground from "../images/bossBackground.png"

import portalImage from "../images/portal.png"

const Resources = {

    // lvl one

    Background: new ImageSource(backgroundImage),
    Platform: new ImageSource(platformImage),
    Spikes: new ImageSource(spikeImage),

    // lvl two

    BackgroundLvlTwo: new ImageSource(backgroundLvTwoImg),
    PlatformLvlTwo: new ImageSource(platformLvTwoImg),
    SpikesLvlTwo: new ImageSource(spikesLvlTwoImg),


    // lvl three

    Bee: new ImageSource(beeImage),
    SadBee: new ImageSource(sadBee),
    MadBee: new ImageSource(madBee),
    HappiestBee: new ImageSource(happiestBee),

    Spider: new ImageSource(spiderImage),

    Flower: new ImageSource(flowerImage),

    Portal: new ImageSource(portalImage),

    Button: new ImageSource(buttonImage),
    StartBtn: new ImageSource(startBtnImage),
    TryAgainBtn: new ImageSource(tryAgainBtnImage),
    NextLvlBtn: new ImageSource(nextLvlBtnImage),
    GameOverBtn: new ImageSource(gameOverBtnImage),

    Logo: new ImageSource(logoImage),

    TextBubble: new ImageSource(textBubbleImage),

    Boss: new ImageSource(boss),
    BossHit: new ImageSource(bossHit),
    HoneyBomb: new ImageSource(honeyBomb),
    BossWeb: new ImageSource(bossWeb),
    TempBossFloor: new ImageSource(bossFloorTemp),
    BossBackground: new ImageSource(bossBackground)


}
const ResourceLoader = new Loader([

    // lvl one

    Resources.Background,
    Resources.Platform,
    Resources.Spikes,

    // lvl two
    Resources.BackgroundLvlTwo,
    Resources.PlatformLvlTwo,
    Resources.SpikesLvlTwo,

    // lvl three

    Resources.Bee,
    Resources.SadBee,
    Resources.MadBee,
    Resources.HappiestBee,
    
    Resources.Spider,

    Resources.Flower,

    Resources.Portal,

    Resources.Button,
    Resources.StartBtn,
    Resources.TryAgainBtn,
    Resources.NextLvlBtn,
    Resources.GameOverBtn,

    Resources.Logo,

    Resources.TextBubble,

    Resources.Boss,
    Resources.BossHit,
    Resources.HoneyBomb,
    Resources.BossWeb,
    Resources.TempBossFloor,
    Resources.BossBackground
])

export { Resources, ResourceLoader }
