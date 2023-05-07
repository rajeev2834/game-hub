import {Badge} from '@chakra-ui/react'

interface Props{
    metacritic: number;
}

const CriticScore = ({metacritic}: Props) => {
    const color = metacritic > 75 ? 'green' : metacritic > 50 ? 'yellow' : 'red';

  return (
    <Badge fontSize='14px' paddingX={2} borderRadius='4px' colorScheme={color}>{metacritic}</Badge>
    )
}

export default CriticScore;