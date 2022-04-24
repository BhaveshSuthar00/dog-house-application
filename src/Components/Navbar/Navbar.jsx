import { Box, Button, Flex, HStack, Spacer, Stack, Text } from '@chakra-ui/react'
import React from 'react'
import {ColorModeSwitcher} from '../../ColorModeSwitcher'
import { Link } from 'react-router-dom'
import {useSelector, useDispatch} from 'react-redux'
import { apiCallLoggedOut } from '../../Redux/Login/Action'
import { useNavigate } from 'react-router-dom'
const Navbar = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const {loggedIn, auth} = useSelector((store)=> store.login);
    const store = useSelector((store)=> store.login)
    console.log(store)
    return (
    <Flex  
    top={0}
    bottom={0}
    left={0}
    zIndex={100}
    boxShadow='lg'
    mb={5}
    rounded='md' 
    backdropFilter='auto' 
    backdropBlur='8px'
    p={2} 
    w="full" 
    position="sticky"
    >
        <Box>
            <Text>
                Bog app
            </Text>
        </Box>
        <Spacer />
        <ColorModeSwitcher />
        <Box>
            <Link to='/'>
                <Button mr={3} variant="ghost"
                    colorScheme="teal"
                >
                    Home
                </Button>
            </Link>
            {
                !loggedIn ?
                <Link to='/signin'>
                <Button mr={3} variant="ghost"
                    colorScheme="teal"
                >
                    Sign in
                </Button>
                </Link> : null
            }
            {
                !loggedIn ? 
                <Link to='/login'>
                <Button mr={3} variant="ghost"
                    colorScheme="teal"
                >
                    Login
                </Button>
                </Link> :
                <Button
                mr={3} variant="ghost"
                colorScheme="teal"
                onClick={()=>{
                    dispatch(apiCallLoggedOut())
                    navigate('/')
                }}
                >
                    Log out
                </Button>
            }
            {
                auth === 'Permission granted for all' || auth === 'Permission granted for add house' ?
                <Link to='/listing/create'>
                <Button mr={3} variant="ghost"
                    colorScheme="teal"
                >
                    Add House
                </Button>
                </Link> : null
            }
        </Box>
    </Flex>
    )
}

export default Navbar