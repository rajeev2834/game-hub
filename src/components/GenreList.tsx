import {List, ListItem, HStack, Image, Button, Spinner} from '@chakra-ui/react'
import useGeneres, { Genre } from '../hooks/useGenres';

import getCroppedImageUrl from '../services/image-url';

interface Props{
    onSelectGenre: (genre: Genre) => void;
}
const GenreList = ({onSelectGenre} : Props) => {
    const {genres, error, isloading} = useGeneres();

    if(isloading) return <Spinner/>
    if(error) return null;

  return (
    <List>
      {genres.map(genre => (
        <ListItem key={genre.id} paddingY='5px'>
            <HStack>
                <Image boxSize='32px' borderRadius= {8} src={ getCroppedImageUrl(genre.image_background)} alt={genre.name} />
                <Button fontSize='md' variant='link' onClick={() => onSelectGenre(genre)}>{genre.name}</Button>
            </HStack>
        </ListItem>
      ))}
    </List>
  )
}

export default GenreList;