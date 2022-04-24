import React, {useState, useEffect} from 'react'
import { Container, 
    FormControl, 
    FormLabel, 
    Input, 
    useToast,
    Button
} from '@chakra-ui/react';
import {useNavigate} from 'react-router-dom'
import {useDispatch} from 'react-redux'
const Detail = () => {
    const toast = useToast();
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [loginData, setLogin] = useState({});
    const handleChange = (e) =>{
        const {id, value} = e.target;
    }
    const handleSubmit = (e) => {
        e.preventDefault();
    }
    useEffect(()=>{
    }, [])
    return (
        <Container mt={30} boxShadow='xl' p={8}>
            <form onSubmit={handleSubmit}>
                <FormControl>
                    <FormLabel htmlFor='email'></FormLabel>
                    <Input id='email' type='email' onChange={handleChange} />
                </FormControl>
                <FormControl>
                    <FormLabel htmlFor='email'>Email address</FormLabel>
                    <Input id='email' type='email' onChange={handleChange} />
                </FormControl>
                <FormControl>
                    <FormLabel htmlFor='email'>Email address</FormLabel>
                    <Input id='email' type='email' onChange={handleChange} />
                </FormControl>
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

export default Detail