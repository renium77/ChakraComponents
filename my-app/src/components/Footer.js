import { Container, Divider, Heading, Link, SimpleGrid, Stack, Text } from '@chakra-ui/react'
import React from 'react'

function Footer() {
    return (
        <div>
            <Container as={Stack} maxW={'5xl'} pt='150px' pb='50px'>
                <SimpleGrid columns={{base:1, sm:2, md:3}} spacing={8}>
                    <Stack align='flex-start'>
                        <Heading fontWeight='medium' fontSize='2xl'>
                            Product
                        </Heading>
                        <Link fontSize='lg'>Page Section</Link>
                        <Link fontSize='lg'>Navigation</Link>
                        <Link fontSize='lg'>Components</Link>
                    </Stack>

                    <Stack align='flex-start'>
                        <Heading fontWeight='medium' fontSize='2xl'>
                            Social
                        </Heading>
                        <Link fontSize='lg'>Github Repository</Link>
                        <Link fontSize='lg'>Figma Design Resources</Link>
                        <Link fontSize='lg'>Components</Link>
                    </Stack>

                    <Stack align='flex-start'>
                        <Heading fontWeight='medium' fontSize='2xl'>
                            Support us
                        </Heading>
                        <Link fontSize='lg'>Buy me coffee</Link>
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
