import { Box, Button, chakra, Container, Flex, Heading, HStack, Link, Stack, Text } from '@chakra-ui/react'
import React from 'react'

function Navbar() {
    return (
        <div>
            
            <Flex
            as='nav'
            align='center'
            justify='space-between'
            wrap='wrap'
            padding='3'
            bg='black'
            pt='15px'
            pl={{base:'10px', md:'30px'}}
            boxShadow='lg'
            >
                <Flex align='center'>
                    <Link> 
                        <Heading as='h2' fontSize='xl' textAlign='right' color='white'>
                            <chakra.span color='#7000fe'>.</chakra.span>chakra<br/>components
                        </Heading>
                    </Link> 

                    
                </Flex>

                        <Stack
                            direction={{ base: "column", md: "row" }}
                            display={{ base: "none", md: "inline-flex" }}
                            width={{ base: "full", md: "auto" }}
                            justifyContent="end"
                            flexGrow={1}
                            mt={{ base: 4, md: 0 }}
                            spacing={2}
                            border='black'
                        >
                            <Button bg='black' fontSize="lg" color="white" _hover={{bg:'black'}}><Link to='/post'>Templates</Link></Button>
                            <Button bg='black' fontSize="lg" color="white" _hover={{bg:'black'}}><Link to='/post'>Github</Link></Button>
                        </Stack>

                        <Text pr={{base:'20px',md:'50px'}} as='h4' fontSize='lg' color='#a9a9a9'> version 1.0</Text>
                  
            </Flex>
            
        </div>
    )
}

export default Navbar
