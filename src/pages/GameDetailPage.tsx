import React from 'react'
import { useParams } from 'react-router-dom';
import useGame from '../hooks/useGame';
import { Button, Heading, SimpleGrid, Text } from '@chakra-ui/react';
import ExpandedText from '../components/ExpanedText';
import DefinitonItem from '../components/DefinitonItem';
import CriticScore from '../components/CriticScore';

const GameDetailPage = () => {
  const {slug} = useParams();

  const {data: game, isLoading, error} = useGame(slug!);
  
  if (isLoading) {
    return <div>Loading...</div>
  }

  if (error) {
    throw error;
  }
  return (
    <>
      <Heading>{game?.name}</Heading>
      <ExpandedText children={game?.description_raw} />
      <SimpleGrid columns={2} as="dl">
        <DefinitonItem term='Platforms'>
          {game?.parent_platforms.map(({platform}) => (
            <Text key={platform.id}>{platform.name}</Text>
          ))}
        </DefinitonItem>
        <DefinitonItem term='Metacritic Score'>
          <CriticScore metacritic={game?.metacritic}/>
        </DefinitonItem>
        <DefinitonItem term='Genres'>
          {game?.genres.map(({name}) => (
            <Text key={name}>{name}</Text>
          ))}
        </DefinitonItem>
        <DefinitonItem term="Publishers">
          {game?.publishers.map(({id, name}) => (
            <Text key={id}>{name}</Text>
          ))}
        </DefinitonItem>
      </SimpleGrid>
    </>
  )
}

export default GameDetailPage;