import { Heading } from "@chakra-ui/react";
import { Genre } from "../hooks/useGenres";
import { Platform } from "../hooks/usePlatforms";

interface Props{
    selectedGenre: Genre | null;
    selectedPlatform: Platform | null;
}

const GameHeading = ({selectedGenre, selectedPlatform}: Props) => {

  return (
    <Heading as="h1" marginBottom={3} marginTop={2}>{selectedGenre?.name} {selectedPlatform?.name} Game</Heading>
  )
}

export default GameHeading;