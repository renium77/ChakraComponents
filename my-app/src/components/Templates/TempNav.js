import { Box, Button, chakra, Container, Drawer, DrawerCloseButton, DrawerContent, DrawerHeader, DrawerOverlay, Flex, Heading, IconButton, Menu, MenuButton, useDisclosure } from '@chakra-ui/react'
import React from 'react'
import { AiOutlineMenu } from 'react-icons/ai'
import {Link as ReactLink} from 'react-router-dom'

function TempNav() {

    const { isOpen, onOpen, onClose } = useDisclosure()

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

                   



                    <Box>
                        <Menu>
                        <MenuButton
                            display='inline-flex'
                            
                            as={IconButton}
                            aria-label='Options'
                            icon={<AiOutlineMenu />}
                            variant='outline'
                            border='2px solid'
                            onClick={onOpen}
                            />
                            <Drawer
                            isOpen={isOpen}
                            placement='left'
                            onClose={onClose}
                            >
                                <DrawerOverlay/>
                                <DrawerContent>
                                    <DrawerCloseButton/>
                                    <DrawerHeader align='center'>    
                                        Page Section
                                    </DrawerHeader>
                                        <Button variant='link' p='2'>Hero</Button>
                                        <Button variant='link' p='2'>Footer</Button>
                                        <Button variant='link' p='2'>Stats</Button>
                                        <Button variant='link' p='2'>Features</Button>
                                        <Button variant='link' p='2'>Result</Button>
                                        <Button variant='link' p='2'>Cards</Button>
                                </DrawerContent>

                            </Drawer>
                            </Menu>
                    </Box>

                     <Flex align='center'>
                    <ReactLink to='/hero'> 
                        <Heading as='h2' fontSize='xl' textAlign='right' color='black'>
                            <chakra.span color='#7000fe'>.</chakra.span>chakra<br/>components
                        </Heading>
                    </ReactLink> 

                    
                </Flex>

                </Flex>
            </Container>
            </Box>
        </div>
    )
}

export default TempNav
