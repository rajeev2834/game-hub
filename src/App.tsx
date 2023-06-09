import { Box, Flex, Grid, GridItem, Show } from "@chakra-ui/react";
import { useState } from 'react';
import GameGrid from "./components/GameGrid";
import GameHeading from './components/GameHeading';
import GenreList from "./components/GenreList";
import NavBar from "./components/NavBar";
import PlatformSelector from './components/PlatformSelector';
import SortSelector from './components/sortSelector';
import { Platform } from './hooks/useGames';
import { Genre } from './hooks/useGenres';

function App() {

  const [selectedGenre, setSelectedGenre] = useState<Genre | null>(null);
  const [selectedPlatform, setSelectedPlatform] = useState<Platform | null>(null);
  const [sortOrder, setSortOrder] = useState<string | null>(null);
  const [searchInput, setSearchInput] = useState<string | null>(null);

  return (
   <Grid templateAreas={{
    base: `"nav" "main"`,
    lg: `"nav nav" "aside main"`
   }}
   templateColumns={{
    base: '1fr',
    lg: '200px 1fr'
   }}
   >
    <GridItem area="nav"><NavBar onSearch={(value)=> {setSearchInput(value)}} /></GridItem>
    <Show above="lg">
    <GridItem area="aside" bg='gray' paddingX={4}>
      <GenreList onSelectGenre = {(genre) => setSelectedGenre(genre)} selectedGenre={selectedGenre}/>
    </GridItem>
    </Show>
    
    <GridItem area="main" bg='orange'>
      <Box paddingLeft={10}>
        <GameHeading selectedGenre={selectedGenre} selectedPlatform={selectedPlatform}/>
        <Flex>
          <PlatformSelector onSelectPlatform={(platform) => setSelectedPlatform(platform)} selectedPlatform={selectedPlatform}/>
          <SortSelector onSelectSort={(order) => setSortOrder(order)} selectedSortOrder={sortOrder}/>
        </Flex>
      </Box>
      
      <GameGrid selectedGenre={selectedGenre} selectedPlatform={selectedPlatform} selectedSortOrder={sortOrder} 
        searchInput={searchInput}/>
    </GridItem>
   </Grid>
  )
}

export default App;