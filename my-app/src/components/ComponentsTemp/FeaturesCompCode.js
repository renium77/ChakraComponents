import { Box, Container } from '@chakra-ui/react';
import React from 'react';
import Highlight from 'react-highlight'

function FeaturesCompCode() {
  return (
      <div>
          <Box pt='5'>
            <Container overflow='scroll' fontSize={{base:'sm', md:'md'}} maxW={{base:'md', md:'6xl'}} bg='#011627' borderRadius='2xl' color='white'>
                <Highlight language='javascript'>
                    {`
    <Box p={4}>
        <SimpleGrid columns={{base:1, md:'3'}} spacing={10} bg='gray.50' p='10'>
            <Stack>
                <Flex w={16} h={16} align='center' justify='center' color='white' rounded='full' bg='gray.200' mb={1}>
                    </Flex>
                        <Text fontWeight={600}>
                            Lifetime Support
                        </Text>
                        <Text color={'gray.600'}>
                            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore...
                        </Text>
            </Stack>

            <Stack>
                <Flex w={16} h={16} align='center' justify='center' color='white' rounded='full' bg='gray.200' mb={1}>
                    </Flex>
                        <Text fontWeight={600}>
                            Lifetime Support
                        </Text>
                        <Text color={'gray.600'}>
                            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore...
                        </Text>
            </Stack>

            <Stack>
                <Flex w={16} h={16} align='center' justify='center' color='white' rounded='full' bg='gray.200' mb={1}>
                </Flex>
                    <Text fontWeight={600}>
                        Lifetime Support
                    </Text>
                    <Text color={'gray.600'}>
                        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore...
                    </Text>
            </Stack>

                    
              </SimpleGrid>
          </Box>
                    `}
                </Highlight>
            </Container> 
            </Box>
      </div>
  )
}

export default FeaturesCompCode;
