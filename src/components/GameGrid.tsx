import {Text, SimpleGrid} from '@chakra-ui/react';
import useGames from '../hooks/useGames';
import GameCard from './GameCard';
import GameCardSkeleton from './GameCardSkeleton';
import GameCardContainer from './GameCardContainer';
import { Genre } from '../hooks/useGenres';


interface Props {
    selectedGenre: Genre | null;
}
const GameGrid = ({selectedGenre}: Props) => {
    const {games, error, isloading} = useGames(selectedGenre);
    const skeletons = [1, 2, 3, 4, 5, 6]


    return (
        <>
        {error && <Text>{error}</Text>}
            <SimpleGrid columns={{ sm:1, md:2, lg:3, xl:4}} spacing={5} padding={10}>
                {isloading && skeletons.map(skeleton => 
                <GameCardContainer key={skeleton}>
                    <GameCardSkeleton />
                </GameCardContainer>)} 
                {games.map(game =>
                <GameCardContainer key={game.id}>
                    <GameCard game={game}/>
                </GameCardContainer>
                    )}
            </SimpleGrid>
        </>
      )
}

export default GameGrid;