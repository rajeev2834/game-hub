import React from 'react'
import {Box} from '@chakra-ui/react'

interface Props{
    children: React.ReactNode
}
const GameCardContainer = ({children} : Props) => {
  return (
    <Box 
    _hover={{
      transform: 'scale(1.05)',
      transition: 'transform 0.2s cubic-bezier(0,0,0.31,1)',
    }}
    borderRadius={10} 
    overflow={'hidden'}>{children}</Box>
  )
}

export default GameCardContainer;