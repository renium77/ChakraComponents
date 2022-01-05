import { Box, Button, chakra, Container, Drawer, Flex, Heading, HStack, IconButton, Link, Menu, MenuButton, MenuItem, MenuList, Stack, Text, useDisclosure } from '@chakra-ui/react'
import React from 'react'
import {AiOutlineMenu} from 'react-icons/ai'

function Navbar() {

    const { isOpen, onOpen, onClose } = useDisclosure()

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

                <Text pr={{base:'20px',md:'50px'}} as='h4' fontSize='lg' color='#a9a9a9'> version 1.0</Text>


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
                            <Button bg='black' fontSize="lg" color="white" _hover={{bg:'black'}}><Link to='/post'>Templates</Link></Button>
                            <Button bg='black' fontSize="lg" color="white" _hover={{bg:'black'}}><Link to='/post'>Github</Link></Button>
                        </Stack>

                        
                  
            </Flex>
            
        </div>
    )
}

export default Navbar
