import { Box, Button, Heading, Text } from '@chakra-ui/react';
import React from 'react';

function ResultComp() {
  return (
      <div>
        <Box textAlign='center' py='10' px='6' bg='gray.50'>
            <Heading display='inline-block' as='h2' size='2xl' bg='teal.400' backgroundClip='text'>
                404
            </Heading>

            <Text fontSize="18px" mt={3} mb={2}>
                Page Not Found
            </Text>
            <Text color={'gray.500'} mb={6}>
                The page you're looking for does not seem to exist
            </Text>

            <Button
            colorScheme="teal"
            bgGradient="linear(to-r, teal.400, teal.500, teal.600)"
            color="white"
            variant="solid">
            Go to Home
            </Button>
            </Box> 
      </div>
  )
}

export default ResultComp;
