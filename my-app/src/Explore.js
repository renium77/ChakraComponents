import { Box, Button, Container, Heading, Text } from '@chakra-ui/react'
import React from 'react'
import {Link as ReactLink} from 'react-router-dom'

function Explore() {
    return (
        <div>
            <Container maxW='6xl' pt='50px'>
                <Box bg='teal.500' borderRadius='lg' p={10}>
                    <Heading as='h3' color='white' fontSize={{base:'xl', md:'3xl'}}>
                        Explore 62+ production-ready Templates
                    </Heading>

                    <Text pt='10px' fontSize={{base:'xl', md:'2xl'}} color='white'>
                        and start building beautiful websites & webapps today!
                    </Text>
                    
                    <Button mt='20px'><ReactLink to='/temp'>
                        Browse templates</ReactLink>
                    </Button>
                </Box>
            </Container>
        </div>
    )
}

export default Explore