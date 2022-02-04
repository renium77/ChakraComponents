import { Container, Divider, Heading, Link, SimpleGrid, Stack, Text } from '@chakra-ui/react'
import React from 'react'
import {Link as ReactLink} from 'react-router-dom'

function Footer() {
    return (
        <div>
            <Container as={Stack} maxW={'5xl'} pt='150px' pb='50px'>
                <SimpleGrid columns={{base:1, sm:2, md:3}} spacing={8}>
                    <Stack align='flex-start'>
                        <Heading fontWeight='medium' fontSize='2xl'>
                            Product
                        </Heading>
                        <ReactLink to='/temphero' fontSize='lg'>Hero</ReactLink>
                        <ReactLink to='/tempfooter' fontSize='lg'>Footer</ReactLink>
                        <ReactLink to='/temphero' fontSize='lg'>Components</ReactLink>
                    </Stack>

                    <Stack align='flex-start'>
                        <Heading fontWeight='medium' fontSize='2xl'>
                            Social
                        </Heading>
                        <Link fontSize='md' href='https://github.com/renium77/ChakraComponents'>Github Repository</Link>
                        <Link fontSize='md'>Figma Design Resources</Link>
                    </Stack>

                    <Stack align='flex-start'>
                        <Heading fontWeight='medium' fontSize='2xl'>
                            Support us
                        </Heading>
                        <Link fontSize='md'>Buy me coffee</Link>
                    </Stack>
                </SimpleGrid>
            </Container>

            <Divider pt='5px'/>
            
            <Text p={10} textAlign='center'>
                © 2020 Chakra Components. All rights reserved
            </Text>
        </div>
    )
}

export default Footer
