import React, { useState } from 'react'
import { Button, Text } from '@chakra-ui/react'

interface Props {
    children : string,
}
const ExpandedText = ({children}: Props) => {

    const [expanded, setExpanded] = useState(false);

    const limit = 300;

    if(children.length <= limit) {
        return <Text>{children}</Text>
    }

    const summary = expanded ? children : `${children.substring(0, limit)}...`;

  return (
    <Text>{summary}{" "}
        <Button onClick={() => setExpanded(!expanded)} size={'xs'} fontWeight={'bold'} colorScheme='yellow'>
            {expanded ? 'Show less' : 'Read more'}
        </Button>
    </Text>
  )
}

export default ExpandedText;