import { Container, Heading } from '@chakra-ui/react';
import React from 'react';
import Footer from '../Footer';
import TempNav from './TempNav';
import FeaturesComp from '../ComponentsTemp/FeaturesComp'
import FeaturesCompCode from '../ComponentsTemp/FeaturesCompCode';

function TempFeatures() {
  return (
      <div>
          <TempNav/>
          <Container p={5} maxW='6xl'>
            <Heading >
                Features
            </Heading>
            <FeaturesComp/>
            <FeaturesCompCode/>
            <Footer/>
            </Container>
      </div>
  )
}

export default TempFeatures;
