import { Container, Heading } from '@chakra-ui/react';
import React from 'react';
import StatComp from '../ComponentsTemp/StatComp';
import StatCompCode from '../ComponentsTemp/StatCompCode';
import Footer from '../Footer';
import TempNav from './TempNav';

function TempStats() {
  return (
    <div>
        <TempNav/>
        <Container p={5} maxW='6xl'>
            <Heading >
                Statistics
            </Heading>
            <StatComp/>
            <StatCompCode/>
            <Footer/>
        </Container>
    </div>
  )
}

export default TempStats;
