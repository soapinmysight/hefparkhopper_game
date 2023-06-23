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
import platformLvlThreeImg from "../images/platformlvl3.png"
import spikesLvlThreeImg from "../images/spikeslvl3.png"


// characters and level elements
import beeImage from "../images/bee2.png"
import sadBee from "../images/sadBee.png"
import sadBeeHit from "../images/sadBeeHit.png"
import madBee from "../images/madBee.png"
import happiestBee from "../images/happiestBee.png"
import beeHeart from "../images/characterHeart.png"

import spiderImage from "../images/spoeder.png"
import deadSpiderImg from "../images/deadspider.png"

import flowerImage from "../images/flower.png"

import portalImage from "../images/portal.png"
import closedPortalImage from "../images/closedPortal.png"

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
import bossPlatform from "../images/bossPlatform.png"

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
    PlatformLvlThree: new ImageSource(platformLvlThreeImg),
    SpikesLvlThree: new ImageSource(spikesLvlThreeImg),


    // characters and level elements
    Bee: new ImageSource(beeImage),
    SadBee: new ImageSource(sadBee),
    SadBeeHit: new ImageSource(sadBeeHit),
    MadBee: new ImageSource(madBee),
    HappiestBee: new ImageSource(happiestBee),
    BeeHeart: new ImageSource(beeHeart),

    Spider: new ImageSource(spiderImage),
    DeadSpider: new ImageSource(deadSpiderImg),
    Flower: new ImageSource(flowerImage),
    Portal: new ImageSource(portalImage),
    ClosedPortal: new ImageSource(closedPortalImage),

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
    BossPlatform: new ImageSource(bossPlatform)

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
    Resources.PlatformLvlThree,
    Resources.SpikesLvlThree,


    // characters and level elements
    Resources.Bee,
    Resources.SadBee,
    Resources.SadBeeHit,
    Resources.MadBee,
    Resources.HappiestBee,
    Resources.BeeHeart,
    
    Resources.Spider,
    Resources.DeadSpider,
    Resources.Flower,
    Resources.Portal,
    Resources.ClosedPortal,

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
    Resources.BossPlatform
])

export { Resources, ResourceLoader }
