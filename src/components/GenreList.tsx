import {List, ListItem, HStack, Image, Button, Spinner, Heading} from '@chakra-ui/react'
import useGeneres, { Genre } from '../hooks/useGenres';

import getCroppedImageUrl from '../services/image-url';
import { useGenreStore } from '../hooks/store';

const GenreList = () => {
    const {data, error, isLoading} = useGeneres();
    //const store = useGenreStore();

    const {genres, setGenres} =  useGenreStore();
    
    console.log("Genre Rendered");

    if(isLoading) return <Spinner/>
    if(error) return null;

  return (
    <>
      <Heading fontSize={'2xl'} marginBottom={3} marginTop={2}>Genres</Heading>
      <List>
        {data?.results.map(genre => (
          <ListItem key={genre.id} paddingY='5px'>
              <HStack>
                  <Image boxSize='32px' borderRadius= {8} objectFit={'cover'} src={ getCroppedImageUrl(genre.image_background)} alt={genre.name} />
                  <Button whiteSpace='normal' textAlign={'left'} fontWeight={genre.id === genres?.id ? 'bold' : 'normal'} 
                  fontSize='md' variant='link' onClick={() => setGenres(genre) }>{genre.name}</Button>
              </HStack>
          </ListItem>
        ))}
      </List>
    </>
  )
}

export default GenreList;