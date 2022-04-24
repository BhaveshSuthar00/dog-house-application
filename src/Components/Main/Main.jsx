import { 
  Container,
  Stack,
  Table,
  Text, 
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
  Button,
} from '@chakra-ui/react'
import React, {useEffect} from 'react'
import {Link} from 'react-router-dom'
import {useSelector, useDispatch} from 'react-redux'
import { apiCallAddress } from '../../Redux/Address/Action'
import { CgDetailsMore } from 'react-icons/cg'
import Filter from './Filter'
const Main = () => {
  const dispatch = useDispatch();
  const {address} = useSelector((store)=> store.address)
  console.log(address)
  useEffect(()=>{
    dispatch(apiCallAddress())
  }, [])
  if(address.length <= 0){
    return <>loading...</>
  }
  return (
    <Stack p={4} w="100%" >
        <Filter />
        <TableContainer>
          <Table> 
            <Thead>
              <Tr>
                <Th>
                  id
                </Th>
                <Th>Name</Th>
                <Th>City</Th>
                <Th>Address</Th>
                <Th>Capacity</Th>
                <Th>Cost per day</Th>
                <Th>verified</Th>
                <Th>Rating</Th>
                <Th>More Details</Th>
              </Tr>
            </Thead>
            <Tbody>
              {
                address.map((item, index)=>{
                  return <Tr>
                      <Td>{index+1}</Td>
                      <Td>{item.userId.firstName}</Td>
                      <Td>{item.city}</Td>
                      <Td>{item.address}</Td>
                      <Td>{item.capacity}</Td>
                      <Td>{item.costPerDay}</Td>
                      <Td>{
                          item.verified === true ? 'Yes' : 'No'
                        }</Td>
                      <Td>{item.rating}</Td>
                      <Td>
                        <Link to={`/listing/${item.userId._id}`}>
                          <Button rightIcon={<CgDetailsMore />}>
                            more
                          </Button>
                        </Link>
                      </Td>
                </Tr>
                })
              }
            </Tbody>
          </Table>
        </TableContainer>
    </Stack>
  )
}

export default Main