import { Container, Heading } from '@chakra-ui/react'
import React from 'react'
import FooterComp from '../ComponentsTemp/FooterComp'
import FooterCompCode from '../ComponentsTemp/FooterCompCode'
import Footer from '../Footer'
import TempNav from './TempNav'

function TempFooter() {
    return (
        <div>
            <TempNav/>
            <Container p={5} maxW='6xl'>
            <Heading >
                Footer
            </Heading>
            <FooterComp/>
            <FooterCompCode/>
            <Footer/>
            </Container>
            
        </div>
    )
}

export default TempFooter
