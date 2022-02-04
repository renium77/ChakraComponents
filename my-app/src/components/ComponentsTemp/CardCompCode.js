import { Box, Container } from '@chakra-ui/react';
import React from 'react';
import Highlight from 'react-highlight'

function CardCompCode() {
  return (
      <div>
          <Box pt='5'>
            <Container overflow='scroll' fontSize={{base:'sm', md:'md'}} maxW={{base:'md', md:'6xl'}} bg='#011627' borderRadius='2xl' color='white'>
                <Highlight language='javascript'>
                    {`<Center py={6}>
            <Box maxW={'270px'} w={'full'} bg='white' boxShadow='2xl' rounded='md' overflow='hidden'>
                <Image h='120px' w='full' src={'https://images.unsplash.com/photo-1643636705240-0fa6e6b1194c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDExfGJvOGpRS1RhRTBZfHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60'}
                objectFit='cover'/>
                <Flex justify='center' mt='-12'>
                    <Avatar size='xl' src={'https://images.unsplash.com/photo-1643725189988-53fe30b00e81?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw2N3x8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60'} 
                    alt='author' border='2px solid'/>
                </Flex>

                <Box p={6}> 
                    <Stack spacing={0} align='center' mb={5}>
                        <Heading fontSize='2xl' fontWeight={500}>John Doe</Heading>
                        <Text color='gray.500'>Fictional Character</Text>
                    </Stack>

                    <Button w={'full'} mt={8} bg='gray.900' color={'white'} rounded={'md'}
                    hover={{transform: 'translateY(-2px)', boxShadow: 'lg' }}>
                        Follow
                </Button>
                </Box>
            </Box>
          </Center>`}
                </Highlight>
            </Container>
            </Box>
      </div>
  )
}

export default CardCompCode;
