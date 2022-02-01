import { Box, Container } from '@chakra-ui/react';
import React from 'react';
import Highlight from 'react-highlight'

function StatCompCode() {
  return (
        <div>
            <Box pt='5'>
                <Container overflow='scroll' fontSize={{base:'sm', md:'md'}} maxW={{base:'md', md:'6xl'}} bg='#011627' borderRadius='2xl' color='white'>
                    <Highlight language='javascript'>
                        {`
    <Box as='section' bg='gray.50' p='10'>
        <Box  maxW="7xl" mx="auto" px={{ base: '6', md: '8' }}>
            <SimpleGrid columns={{ base: 1, md: 3 }} spacing="6">
                <Stat px={{ base: 4, sm: 6 }} py="5" bg='white' shadow="base" rounded="lg">
                    <StatLabel fontWeight='medium' isTruncated color='gray.500'>Total Subscriber</StatLabel>
                    <StatNumber fontSize='3xl' fontWeight='medium' color='gray.900'>15956133</StatNumber>
                </Stat>

                <Stat px={{ base: 4, sm: 6 }} py="5" bg='white' shadow="base" rounded="lg">
                    <StatLabel fontWeight='medium' isTruncated color='gray.500'>Total Subscriber</StatLabel>
                    <StatNumber fontSize='3xl' fontWeight='medium' color='gray.900'>15956133</StatNumber>
                </Stat>

                <Stat px={{ base: 4, sm: 6 }} py="5" bg='white' shadow="base" rounded="lg">
                    <StatLabel fontWeight='medium' isTruncated color='gray.500'>Total Subscriber</StatLabel>
                    <StatNumber fontSize='3xl' fontWeight='medium' color='gray.900'>15956133</StatNumber>
                </Stat>
            </SimpleGrid>
        </Box>
    </Box>
                        `}
                    </Highlight>
                </Container>
            </Box>
        </div>
    )
}

export default StatCompCode;
