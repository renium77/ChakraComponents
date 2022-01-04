import { Box } from '@chakra-ui/react'
import React from 'react'

function BannerTop() {
    return (
        <div>
            <Box fontSize={{base:'sm', md:'lg'}} p={2} h={{base:'50px', md:'40px'}} w='full' bg='#ffbb39' color='white' align='center' fontWeight='bold'>[Only 20 Slots available] Design for product managers Libe</Box>
        </div>
    )
}

export default BannerTop
