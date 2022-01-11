import { AspectRatio, Code, Container, Heading, Stack } from '@chakra-ui/react'
import React from 'react'
import HeroComp from '../ComponentsTemp/HeroComp'
import HeroCompCode from '../ComponentsTemp/HeroCompCode'
import Footer from '../Footer'

function TempHero() {
    return (
        <div>
            <Container p={5} maxW='6xl'>
            <Heading >
                Hero
            </Heading>
            <HeroComp/>
            <HeroCompCode/>
            </Container>

            <Footer/>
        </div>
    )
}

export default TempHero
