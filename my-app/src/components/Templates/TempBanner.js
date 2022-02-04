import { Container, Heading } from '@chakra-ui/react';
import React from 'react';
import BannerComp from '../ComponentsTemp/BannerComp';
import BannerCompCode from '../ComponentsTemp/BannerCompCode';
import TempNav from './TempNav'
import Footer from '../Footer'

function TempBanner() {
  return (
      <div>
          <TempNav/>
          <Container maxW='6xl' p={5}>
            <Heading>
                Banner
            </Heading>
            <BannerComp/>
            <BannerCompCode/>
            <Footer/>
          </Container>
      </div>
  )
}

export default TempBanner;
