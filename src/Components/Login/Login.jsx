import { 
    FormControl,
    FormLabel,
    Input,
    Container,
    Button,
    useToast,
} from '@chakra-ui/react'
import React, {useState, useEffect} from 'react'
import { apiCallLoggedIn } from '../../Redux/Login/Action'
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
const Login = () => {
    const toast = useToast();
    const navigate = useNavigate();
    const {loggedIn, status ,error} = useSelector((store) => store.login);
    const dispatch = useDispatch();
    const [loginData, setLogin] = useState({});
    const handleChange = (e) =>{
        const {id, value} = e.target;
        setLogin({...loginData, [id] : value});
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(apiCallLoggedIn(loginData));
    }
    useEffect(()=>{
        if(loggedIn === true){
            toast({
                title: 'logged in  successfully.',
                description: "You are logged in.",
                status: 'success',
                duration: 1000,
                isClosable: true,
            })
            navigate('/')
            return;
        } 
        if(error) {
            toast({
                title: 'Login failed.',
                description: "Please Enter correct email or password.",
                status: 'warning',
                duration: 1000,
                isClosable: true,
            })
            document.getElementById('email').value = null;
            document.getElementById('password').value = null;
            navigate('/login')
        }
    }, [loggedIn, status, error])
    
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