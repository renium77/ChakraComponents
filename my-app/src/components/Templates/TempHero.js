import { AspectRatio, Code, Container, Heading, Stack } from '@chakra-ui/react'
import React from 'react'
import HeroComp from '../ComponentsTemp/HeroComp'

function TempHero() {
    return (
        <div>
            <Container p={5} maxW='6xl'>
            <Heading >
                Hero
            </Heading>
            <AspectRatio >
            <HeroComp/>
            </AspectRatio>


            <Code >
                
            </Code>
            </Container>
        </div>
    )
}

export default TempHero
