import { Container, Heading } from '@chakra-ui/react';
import React from 'react';
import CardComp from '../ComponentsTemp/CardComp';
import CardCompCode from '../ComponentsTemp/CardCompCode';
import Footer from '../Footer';
import TempNav from './TempNav';

function TempCard() {
  return (
      <div>
          <TempNav/>
          <Container p={5} maxW='6xl'>
            <Heading >
                Cards
            </Heading>
            <CardComp/>
            <CardCompCode/>
            <Footer/>
            </Container>
      </div>
  )
}

export default TempCard;
