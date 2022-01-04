import { Box, Button, Center, chakra, Container, Heading, HStack, Icon, List, ListIcon, ListItem, SimpleGrid, Stack, Text, VStack } from '@chakra-ui/react'
import React from 'react'
import {MdCheckCircle, MdSettings} from 'react-icons/md'

function HeroMain() {
    return (
        <div>
            <Box bg='black'
            pt='100px'
            >
                <Container maxW='3xl'> 
                    <Stack 
                    as={Box}
                    textAlign='center'
                    > 
                    <Heading color='white' 
                    fontSize={{base:'3xl',md:'6xl'}}
                    textAlign='center'
                    >
                        Free Repository of 
                        <chakra.span bgClip='text' bgGradient='linear(to-l, #7928CA, #FF0080)'> Chakra-UI Components </chakra.span>
                        for devs<chakra.span color='#7000fe'>.</chakra.span> 
                    </Heading>


                    <Text color='white' fontSize={{base:'xl',md:'2xl'}} pt='50px'>
                        Chakra Components is a growing collection of responsive Chakra-UI components, 
                        ready for dev's to drop in the projects
                    </Text>
                    </Stack> 
                    
                    <Center pt='50px'>
                    <SimpleGrid columns={{ base: 1, md: 2 }} spacing='3' alignItems='center'  pb='5'>
                        <Button fontSize='lg' p={6} bg='#7000fe' borderRadius='2' color='white' _hover={{bg:'#7000f1'}}>
                            Browse Components
                        </Button>
                        
                        <Button fontSize='lg' p={6} borderRadius='2' _hover={{bg:'black', border:'2px', color:'white'}}>
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
