import { 
    FormControl,
    FormLabel,
    Input,
    Container,
    Button,
} from '@chakra-ui/react'
import React, {useState} from 'react'
import { apiCallLoggedIn } from '../../Redux/Login/Action'
import { useSelector, useDispatch } from 'react-redux'
const Login = () => {
    const {loggedIn} = useSelector((store) => store.login);
    const dispatch = useDispatch();
    console.log(loggedIn)
    const [loginData, setLogin] = useState({});
    const handleChange = (e) =>{
        const {id, value} = e.target;
        setLogin({...loginData, [id] : value});
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(apiCallLoggedIn(loginData));
    }
  return (
    <Container mt={30} boxShadow='xl' p={8}>
        <form onSubmit={handleSubmit}>
            <FormControl>
                <FormLabel htmlFor='email'>Email address</FormLabel>
                <Input id='email' type='email' onChange={handleChange} />
            </FormControl>
            
            <FormControl>
                <FormLabel htmlFor='password'>Password</FormLabel>
                <Input id='password' type='password'onChange={handleChange}/>
            </FormControl>
            <Button mt={4} w='full' type='submit' variant='solid' colorScheme="green">
                Submit
            </Button>
        </form>
    </Container>
  )
}

export default Login