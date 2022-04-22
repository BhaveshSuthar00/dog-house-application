import { Box, Button, Flex, HStack, Spacer, Stack, Text } from '@chakra-ui/react'
import React from 'react'
import {ColorModeSwitcher} from '../../ColorModeSwitcher'
import { Link } from 'react-router-dom'
const Navbar = () => {
  return (
    <Flex justify="space-between"  p={4} border='1px solid black'>
        <Box>
            <Text>
                Bog app
            </Text>
        </Box>
        <Spacer />
        <ColorModeSwitcher />
        <Box>
            <Link to='/'>
                <Button mr={3} variant="ghost">
                    Home
                </Button>
            </Link>
            <Link to='/login'>
                <Button mr={3} variant="ghost">
                    Login
                </Button>
            </Link>
        </Box>
    </Flex>
  )
}

export default Navbar