import { Box, Flex, Grid, GridItem, Show } from '@chakra-ui/react';
import GameGrid from '../components/GameGrid';
import GameHeading from '../components/GameHeading';
import GenreList from '../components/GenreList';
import PlatformSelector from '../components/PlatformSelector';
import SortSelector from '../components/sortSelector';

const HomePage = () => {
  return (
    <Grid templateAreas={{
        base: `"main"`,
        lg: `"aside main"`
       }}
       templateColumns={{
        base: '1fr',
        lg: '200px 1fr'
       }}
       >
        <Show above="lg">
        <GridItem area="aside" bg='gray' paddingX={4}>
          <GenreList/>
        </GridItem>
        </Show>
        
        <GridItem area="main" bg='orange'>
          <Box paddingLeft={10}>
            <GameHeading />
            <Flex>
              <PlatformSelector/>
              <SortSelector/>
            </Flex>
          </Box>
          
          <GameGrid />
        </GridItem>
       </Grid>
  )
}

export default HomePage;