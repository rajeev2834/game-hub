import {Text, SimpleGrid} from '@chakra-ui/react';
import useGames from '../hooks/useGames';
import GameCard from './GameCard';
import GameCardSkeleton from './GameCardSkeleton';
import GameCardContainer from './GameCardContainer';
import { Genre } from '../hooks/useGenres';
import { Platform } from '../hooks/useGames';


interface Props {
    selectedGenre: Genre | null;
    selectedPlatform: Platform | null;
    selectedSortOrder: string | null;
    searchInput: string | null;
}
const GameGrid = ({selectedGenre, selectedPlatform, selectedSortOrder, searchInput}: Props) => {
    const {data, error, isLoading} = useGames(selectedGenre, selectedPlatform, selectedSortOrder, searchInput);
    const skeletons = [1, 2, 3, 4, 5, 6]


    return (
        <>
        {error && <Text>{error.message}</Text>}
            <SimpleGrid columns={{ sm:1, md:2, lg:3, xl:4}} spacing={6} padding={5}>
                {isLoading && skeletons.map(skeleton => 
                <GameCardContainer key={skeleton}>
                    <GameCardSkeleton />
                </GameCardContainer>)} 
                {data?.results.map(game =>
                <GameCardContainer key={game.id}>
                    <GameCard game={game}/>
                </GameCardContainer>
                    )}
            </SimpleGrid>
        </>
      )
}

export default GameGrid;