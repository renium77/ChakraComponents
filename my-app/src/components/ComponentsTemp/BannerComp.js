import { Box } from '@chakra-ui/react';
import React from 'react';

function BannerComp() {
  return (
      <div>
          <Box fontSize={{base:'sm', md:'lg'}} 
            p={2} 
            h={{base:'50px', md:'40px'}} 
            w='full' 
            bgGradient='linear(to-r, #38B2AC, #4299E1, #805AD5 )'
            color='white' 
            align='center' 
            fontWeight='bold'>[Only 20 Slots available] Design for product managers Live</Box>
      </div>
  )
}

export default BannerComp;
