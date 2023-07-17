import { Heading } from "@chakra-ui/react";
import { Genre } from "../hooks/useGenres";
import { Platform } from "../hooks/usePlatforms";
import { useGenreStore, usePlatformStore } from "../hooks/store";



const GameHeading = () => {

  const {genres}= useGenreStore();
  const {platforms} = usePlatformStore();

  return (
    <Heading as="h1" marginBottom={3} marginTop={2}>{genres?.name} {platforms?.name} Game</Heading>
  )
}

export default GameHeading;