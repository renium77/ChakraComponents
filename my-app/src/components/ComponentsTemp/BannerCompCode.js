import { Box, Container } from '@chakra-ui/react';
import React from 'react';
import Highlight from 'react-highlight'

function BannerCompCode() {
  return (
      <div>
          <Box pt='5'>
                <Container overflow='scroll' fontSize={{base:'sm', md:'md'}} maxW={{base:'md', md:'6xl'}} bg='#011627' borderRadius='2xl' color='white'>
                    <Highlight>
                        {`
                        <Box fontSize={{base:'sm', md:'lg'}} 
                        p={2} 
                        h={{base:'50px', md:'40px'}} 
                        w='full' 
                        bgGradient='linear(to-r, #38B2AC, #4299E1, #805AD5 )'
                        color='white' 
                        align='center' 
                        fontWeight='bold'>[Only 20 Slots available] Design for product managers Live</Box>
                        `}
                    </Highlight>
                </Container>
          </Box>
      </div>
  )
}

export default BannerCompCode;
