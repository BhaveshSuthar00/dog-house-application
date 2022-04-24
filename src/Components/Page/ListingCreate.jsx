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
const ListingCreate = () => {
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
                    <FormLabel htmlFor='city'>City</FormLabel>
                    <Input id='city' type='text' onChange={handleChange} />
                </FormControl>
                <FormControl>
                    <FormLabel htmlFor='address'>Address</FormLabel>
                    <Input id='address' type='text' onChange={handleChange} />
                </FormControl>
                <FormControl>
                    <FormLabel htmlFor='capacity'>Capacity</FormLabel>
                    <Input id='capacity' type='text' onChange={handleChange} />
                </FormControl>
                <FormControl>
                    <FormLabel htmlFor='costPerDay'>Cost Per Day</FormLabel>
                    <Input id='costPerDay' type='text' onChange={handleChange} />
                </FormControl>
                <FormControl>
                    <FormLabel htmlFor='verified'></FormLabel>
                    <Input id='verified' type='' onChange={handleChange} />
                </FormControl>
                <FormControl>
                    <FormLabel htmlFor='rating'>Rating</FormLabel>
                    <Input id='rating' type='number' onChange={handleChange} />
                </FormControl>
                <FormControl>
                    <FormLabel htmlFor='houseUrl'>House Url</FormLabel>
                    <Input id='houseUrl' type='text' onChange={handleChange} />
                </FormControl>
                <FormControl>
                    <FormLabel htmlFor=''></FormLabel>
                    <Input id='' type='text' onChange={handleChange} />
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

export default ListingCreate