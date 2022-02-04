import { Container, Heading } from '@chakra-ui/react';
import React from 'react';
import ResultComp from '../ComponentsTemp/ResultComp';
import ResultCompCode from '../ComponentsTemp/ResultCompCode';
import TempNav from './TempNav';
import Footer from '../Footer'

function TempResult() {
  return (
      <div>
          <TempNav/>
          <Container p={5} maxW='6xl'>
              <Heading>
                  Result
              </Heading>
              <ResultComp/>
              <ResultCompCode/>
              <Footer/>
          </Container>
      </div>
  )
}

export default TempResult;
