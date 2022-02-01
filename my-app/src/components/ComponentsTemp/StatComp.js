import { Box, SimpleGrid, Stat, StatLabel, StatNumber } from '@chakra-ui/react';
import React from 'react';

function StatComp() {
  return (
        <div>
            <Box as='section' bg='gray.100' p='10'>
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
        </div>
    )
}

export default StatComp;
