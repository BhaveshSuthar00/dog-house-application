import { Box, Button, Flex, HStack, Spacer, Stack, Text } from '@chakra-ui/react'
import React from 'react'
import {ColorModeSwitcher} from '../../ColorModeSwitcher'
import { Link } from 'react-router-dom'
import {useSelector} from 'react-redux'
const Navbar = () => {
    const {loggedIn} = useSelector((store)=> store.login);
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
            {
                !loggedIn ? 
                <Link to='/login'>
                <Button mr={3} variant="ghost">
                    Login
                </Button>
                </Link> :
                <Link to='/listing/create'>
                    <Button mr={3} variant="ghost">
                        Add House
                    </Button>
                </Link>
            }
        </Box>
    </Flex>
  )
}

export default Navbar