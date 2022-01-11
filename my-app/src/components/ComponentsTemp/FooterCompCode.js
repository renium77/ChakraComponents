import { Box, Container } from '@chakra-ui/react'
import React from 'react'
import Highlight from 'react-highlight'

function FooterCompCode() {
    return (
        <div>
            <Box pt='5'>
            <Container overflow='scroll' fontSize={{base:'sm', md:'md'}} maxW={{base:'md', md:'6xl'}} bg='#011627' borderRadius='2xl' color='white'>
           <Highlight language="javascript">
            {`
            <Box bg='gray.100'>
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
            </Box>
            `}
            </Highlight>
            </Container> 
            </Box>
        </div>
    )
}

export default FooterCompCode
