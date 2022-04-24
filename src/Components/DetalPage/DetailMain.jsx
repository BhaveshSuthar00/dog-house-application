import React, {useEffect} from 'react'
import {useParams} from 'react-router-dom'
import { useSelector,useDispatch } from 'react-redux'
import { apiCallData } from '../../Redux/Data/Action'
import { Box, Container, Flex, HStack, Text } from '@chakra-ui/react'
const DetailMain = () => {
  const {id} = useParams();
  const dispatch = useDispatch();
  const {addressDetails, loading} = useSelector((store)=> store.details)
  console.log(addressDetails)
  useEffect(() => {
    dispatch(apiCallData(id))
  }, [id])
  if(loading) {
    return <>loadiing...</>
  }
  return (
    <Container>
      <HStack>
        <Box>

        </Box>
        <Box>
          <Text>
            {addressDetails.outDoorArea}
          </Text>
        </Box>
      </HStack>
    </Container>
  )
}

export default DetailMain