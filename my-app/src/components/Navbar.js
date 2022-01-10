import { Box, Button, chakra, Container, Drawer,Link, Flex, Heading, HStack, IconButton, Menu, MenuButton, MenuItem, MenuList, Stack, Text, useDisclosure } from '@chakra-ui/react'
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
                    <Link> 
                        <Heading as='h2' fontSize='xl' textAlign='right' color='black'>
                            <chakra.span color='#7000fe'>.</chakra.span>chakra<br/>components
                        </Heading>
                    </Link> 

                    
                </Flex>



                <Menu display={{base:'inline-flex', md:'none'}}>
                    <Box>
                        <Menu>
                        <MenuButton
                            display={{base:'inline-flex', md:'none'}}
                            color='white'
                            as={IconButton}
                            aria-label='Options'
                            icon={<AiOutlineMenu />}
                            variant='outline'
                        />
                        <MenuList>
                            <MenuItem  command='⌘T'>
                            Templates
                            </MenuItem>
                            <MenuItem  command='⌘N'>
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
                            <Button bg='white' fontSize="lg" color="black" _hover={{bg:'white'}}><ReactLink to='/post'>Github</ReactLink></Button>
                        </Stack>

                        
                  
            </Flex>
            </Container>
            </Box>
            
        </div>
    )
}

export default Navbar
