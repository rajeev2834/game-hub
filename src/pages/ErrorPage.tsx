import { Box, Heading, Text } from '@chakra-ui/react'
import { isRouteErrorResponse, useRouteError } from 'react-router-dom';
import NavBar from '../components/NavBar';


const ErrorPage = () => {
    const error = useRouteError();
  return (
    <>
        <NavBar/>
        <Box padding={5}>
            <Heading>Error Page</Heading>
            <Text>{isRouteErrorResponse(error) ? 
                "Page does not exist" : "Something went wrong"}</Text>
        </Box>
    </>
  )
}

export default ErrorPage;