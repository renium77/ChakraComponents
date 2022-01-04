import React from 'react'
import Explore from '../Explore'
import BannerTop from './BannerTop'
import Footer from './Footer'
import GetStarted from './GetStarted'
import HeroMain from './HeroMain'
import Navbar from './Navbar'

function Hero() {
    return (
        <div>
            <BannerTop/>
            <Navbar/>
            <HeroMain/>
            <GetStarted/>
            <Explore/>
            <Footer/>
        </div>
    )
}

export default Hero
