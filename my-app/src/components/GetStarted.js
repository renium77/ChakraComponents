import { Box, chakra, Container, Heading, SimpleGrid, Stat, StatLabel, StatNumber, Text } from '@chakra-ui/react'
import React from 'react'

function GetStarted() {
    return (
        <div>
            <Box align='center' pt='50px'>
                <Heading>
                    Getting Started in <chakra.span bgClip='text' bgGradient='linear(to-l, #7928CA, #FF0080)'>3 easy steps</chakra.span>
                </Heading>
            </Box>

            <Container maxW='6xl'>
            <SimpleGrid columns={{base:1, md:3}} spacing={{ base: '50px', lg: 8 }} pt='50px'>

                
                    <Box maxW='400px' align='center' boxShadow='lg' rounded='lg' p={6}>
                            <Text color='white' fontWeight='bold' fontSize='lg' borderRadius='2xl' p={3} h='50px' w='50px' bg='#7000fe'>
                                1
                            </Text>

                            <Text fontSize='lg' fontWeight='bold' pt='20px'>
                                Find your Template
                            </Text>

                            <Text pt='15px' textAlign='center' fontWeight='regular' fontSize='lg'>
                                Every template is embedded within an iFrame, so you can easily check what they look like 
                                and test the responsive behaviour.
                            </Text>
                    </Box>

                    <Box maxW='400px' align='center' boxShadow='lg' rounded='lg' p={6}>
                            <Text color='white' fontWeight='bold' fontSize='lg' borderRadius='2xl' p={3} h='50px' w='50px' bg='#7000fe'>
                                2
                            </Text>

                            <Text fontSize='lg' fontWeight='bold' pt='20px'>
                                Copy the code
                            </Text>

                            <Text pt='15px' textAlign='center' fontWeight='regular' fontSize='lg'>
                                Click the code tab to see the actual source code of the template. Copy and paste it into your 
                                project and adjust it to your needs.
                            </Text>
                    </Box>

                    <Box maxW='400px' align='center' boxShadow='lg' rounded='lg' p={6}>
                            <Text color='white' fontWeight='bold' fontSize='lg' borderRadius='2xl' p={3} h='50px' w='50px' bg='#7000fe'>
                                3
                            </Text>

                            <Text fontSize='lg' fontWeight='bold' pt='20px'>
                                Enjoy your free Time
                            </Text>

                            <Text pt='15px' textAlign='center' fontWeight='regular' fontSize='lg'>
                                You've just saved yourself a bunch of time not building the same stuff over and over again. 
                                Enjoy your free time, and build business features
                            </Text>
                    </Box>

                    
                

            </SimpleGrid>
            </Container>
        </div>
    )
}

export default GetStarted
