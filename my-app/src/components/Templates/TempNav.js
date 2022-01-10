import { Box, Button, chakra, Container, Drawer, DrawerCloseButton, DrawerContent, DrawerHeader, DrawerOverlay, Flex, Heading, IconButton, Link, Menu, MenuButton, MenuItem, MenuList, Text, useDisclosure } from '@chakra-ui/react'
import React from 'react'
import { AiOutlineMenu } from 'react-icons/ai'

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
                            colorScheme='black'
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
                                        <Button variant='link' p='2'>Features</Button>
                                        <Button variant='link' p='2'>Footers</Button>
                                        <Button variant='link' p='2'>Testimonials</Button>
                                        <Button variant='link' p='2'>Pricing</Button>
                                        <Button variant='link' p='2'>Statistics</Button>
                                        <Button variant='link' p='2'>Carousel</Button>
                                        <Button variant='link' p='2'>Product Details</Button>
                                         <DrawerHeader align='center'>    
                                        Page Section
                                        </DrawerHeader>
                                        <Button variant='link' p='2'>Hero</Button>
                                        <Button variant='link' p='2'>Statistics</Button>
                                        <Button variant='link' p='2'>Carousel</Button>
                                        <Button variant='link' p='2'>Product Details</Button>
                                </DrawerContent>

                            </Drawer>
                            </Menu>
                    </Box>

                     <Flex align='center'>
                    <Link> 
                        <Heading as='h2' fontSize='xl' textAlign='right' color='black'>
                            <chakra.span color='#7000fe'>.</chakra.span>chakra<br/>components
                        </Heading>
                    </Link> 

                    
                </Flex>

                </Flex>
            </Container>
            </Box>
        </div>
    )
}

export default TempNav
