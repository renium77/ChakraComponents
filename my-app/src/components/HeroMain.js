import { Box, Button, Center, chakra, Container, Heading, SimpleGrid, Stack, Text } from '@chakra-ui/react'
import React from 'react'
import {Link as ReactLink} from 'react-router-dom'

function HeroMain() {
    return (
        <div>
            <Box
            pt='150px'
            >
                <Container maxW='3xl'> 
                    <Stack 
                    as={Box}
                    textAlign='center'
                    > 
                    <Heading 
                    as='h1'
                    color='black' 
                    fontSize={{base:'3xl',md:'5xl'}}
                    fontWeight='extrabold'
                    >
                        Free Repository of 
                        <chakra.span 
                        bgClip='text' 
                        bgGradient='linear(to-r, #285E61, #38B2AC)'> Chakra-UI Components </chakra.span>
                        for devs<chakra.span color='teal.400'>.</chakra.span> 
                    </Heading>


                    <Text color='gray.500' fontSize={{base:'xl',md:'2xl'}} pt='50px'>
                        Chakra Components is a growing collection of responsive Chakra-UI components, 
                        ready for dev's to drop in the projects.
                    </Text>
                    </Stack> 
                    
                    <Center pt='50px'>
                    <SimpleGrid columns={{ base: 1, md: 2 }} spacing='3' alignItems='center'  pb='5'>
                        <Button fontSize='lg' p={7} bg='teal.500' borderRadius='2' color='white' _hover={{bg:'teal.400'}}>
                            <ReactLink to='/temp'>Browse Components</ReactLink>
                        </Button>
                        
                        <Button href="mailto:dereninad@gmail.com" fontSize='lg' p={7} borderRadius='2'>
                            Suggest Components
                        </Button>      
                    </SimpleGrid> 
                    </Center>  
                </Container>
            </Box>
        </div>
    )
}

export default HeroMain
