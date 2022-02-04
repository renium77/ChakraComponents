import { Box, Button, chakra, Container, Link, Flex, Heading, IconButton, Menu, MenuButton, MenuItem, MenuList, Stack} from '@chakra-ui/react'
import React from 'react'
import {AiOutlineMenu} from 'react-icons/ai'
import {Link as ReactLink} from 'react-router-dom'

function Navbar() {


    return (
        <div>
            <Box boxShadow='sm'>
            <Container maxW='8xl'>            
            <Flex
            as='nav'
            align='center'
            justify='space-between'
            wrap='wrap'
            padding='3'
            bg='white'
            pt='15px'
            pl={{base:'10px', md:'30px'}}
            >
                <Flex align='center'>
                    <ReactLink to='/hero'> 
                        <Heading as='h2' fontSize='xl' textAlign='right' color='black'>
                            <chakra.span color='teal.400'>.</chakra.span>chakra<br/>components
                        </Heading>
                    </ReactLink> 

                    
                </Flex>



                <Menu display={{base:'inline-flex', md:'none'}}>
                    <Box>
                        <Menu>
                        <MenuButton
                            display={{base:'inline-flex', md:'none'}}
                            as={IconButton}
                            aria-label='Options'
                            icon={<AiOutlineMenu />}
                            variant='outline'
                        />
                        <MenuList>
                            <MenuItem>
                            Templates
                            </MenuItem>
                            <MenuItem>
                            Github
                            </MenuItem>
                        </MenuList>
                        </Menu>
                    </Box>
                </Menu>


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
                            <Button bg='white' fontSize="lg" color="black" _hover={{bg:'white'}}><ReactLink to='/temp'>Templates</ReactLink></Button>
                            <Button bg='white' fontSize="lg" color="black" _hover={{bg:'white'}}><Link href='https://github.com/renium77/ChakraComponents'>Github</Link></Button>
                        </Stack>

                        
                  
            </Flex>
            </Container>
            </Box>
            
        </div>
    )
}

export default Navbar
