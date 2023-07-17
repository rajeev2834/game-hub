import { SimpleGrid, Text } from '@chakra-ui/react';
import React from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';
import useGames from '../hooks/useGames';
import GameCard from './GameCard';
import GameCardContainer from './GameCardContainer';
import GameCardSkeleton from './GameCardSkeleton';
import { useGenreStore, usePlatformStore, useSearchStore, useSortOrderStore } from '../hooks/store';


const GameGrid = () => {
    const {search: searchInput} = useSearchStore();
    const {genres} = useGenreStore();
    const {platforms} = usePlatformStore();
    const {sortSelector} = useSortOrderStore();

    const {data, error, isLoading, fetchNextPage, hasNextPage} = 
        useGames(genres, platforms, sortSelector, searchInput);
    const skeletons = [1, 2, 3, 4, 5, 6]

    const fetchedGamesCount = data?.pages.reduce((total, page) => 
        total + page.results.length, 0) || 0;

    return (
        <>
        {error && <Text>{error.message}</Text>}
        <InfiniteScroll
            dataLength={fetchedGamesCount}
            hasMore = {!!hasNextPage}
            next={() => fetchNextPage()}
            loader={<GameCardSkeleton/>}
        >
            <SimpleGrid columns={{ sm:1, md:2, lg:3, xl:4}} spacing={6} padding={5}>
                {isLoading && skeletons.map(skeleton => 
                <GameCardContainer key={skeleton}>
                    <GameCardSkeleton />
                </GameCardContainer>)}
                {data?.pages.map((page, index) =>
                    <React.Fragment key={index}>
                        {page.results.map(game =>
                         <GameCardContainer key={game.id}>
                         <GameCard game={game}/>
                     </GameCardContainer>)}
                    </React.Fragment>)}
            </SimpleGrid>
            </InfiniteScroll>
        </>
      )
}

export default GameGrid;