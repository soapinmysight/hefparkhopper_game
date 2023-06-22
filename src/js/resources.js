import { ImageSource, Loader } from 'excalibur'

// level one
import backgroundImage from "../images/background2.png"
import platformImage from "../images/platform.png"
import spikeImage from "../images/spikes.png"

// level two
import backgroundLvTwoImg from "../images/bglvl2.png"
import platformLvTwoImg from "../images/platformlvl2.png"
import spikesLvlTwoImg from "../images/spikeslvl2.png"

// level three
import backgroundLvlThreeImg from "../images/backgroundlvl3.png"

// characters and level elements
import beeImage from "../images/bee2.png"
import sadBee from "../images/sadBee.png"
import madBee from "../images/madBee.png"
import happiestBee from "../images/happiestBee.png"

import spiderImage from "../images/spoeder.png"

import flowerImage from "../images/flower.png"

import portalImage from "../images/portal.png"

// buttons
import buttonImage from "../images/button.png"
import startBtnImage from "../images/startButton.png"
import tryAgainBtnImage from "../images/tryAgain.png"
import nextLvlBtnImage from "../images/nextLevelButton.png"
import gameOverBtnImage from "../images/gameOverButton.png"

// bossfight
import boss from "../images/bossSpider.png"
import bossHit from "../images/bossspiderhit.png"
import honeyBomb from "../images/honeyBomb.png"
import bossWeb from "../images/bossWeb.png"
import bossFloorTemp from "../images/tempFloorBoss.png"
import bossBackground from "../images/bossBackground.png"

// other
import logoImage from "../images/logo.png"
import textBubbleImage from "../images/textBubble.png"

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
    BackgroundLvlThree: new ImageSource(backgroundLvlThreeImg),

    // characters and level elements
    Bee: new ImageSource(beeImage),
    SadBee: new ImageSource(sadBee),
    MadBee: new ImageSource(madBee),
    HappiestBee: new ImageSource(happiestBee),

    Spider: new ImageSource(spiderImage),
    Flower: new ImageSource(flowerImage),
    Portal: new ImageSource(portalImage),

    // buttons
    Button: new ImageSource(buttonImage),
    StartBtn: new ImageSource(startBtnImage),
    TryAgainBtn: new ImageSource(tryAgainBtnImage),
    NextLvlBtn: new ImageSource(nextLvlBtnImage),
    GameOverBtn: new ImageSource(gameOverBtnImage),

    // bossfight
    Boss: new ImageSource(boss),
    BossHit: new ImageSource(bossHit),
    HoneyBomb: new ImageSource(honeyBomb),
    BossWeb: new ImageSource(bossWeb),
    TempBossFloor: new ImageSource(bossFloorTemp),
    BossBackground: new ImageSource(bossBackground),

    //other
    Logo: new ImageSource(logoImage),
    TextBubble: new ImageSource(textBubbleImage)


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
    Resources.BackgroundLvlThree,

    // characters and level elements
    Resources.Bee,
    Resources.SadBee,
    Resources.MadBee,
    Resources.HappiestBee,
    
    Resources.Spider,
    Resources.Flower,
    Resources.Portal,

    // buttons
    Resources.Button,
    Resources.StartBtn,
    Resources.TryAgainBtn,
    Resources.NextLvlBtn,
    Resources.GameOverBtn,


    // bossfight
    Resources.Boss,
    Resources.BossHit,
    Resources.HoneyBomb,
    Resources.BossWeb,
    Resources.TempBossFloor,
    Resources.BossBackground,

    // other
    Resources.Logo,
    Resources.TextBubble
])

export { Resources, ResourceLoader }
