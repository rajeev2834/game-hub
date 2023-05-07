import {Card, Image, CardBody, Heading, HStack} from '@chakra-ui/react'
import { Game } from '../hooks/useGames'
import PlatformIconList from './PlatformIconList';
import CriticScore from './CriticScore';
import getCroppedImageUrl from '../services/image-url';



interface Props{
    game: Game;
}

const GameCard = ({game}: Props) => {
  return (
    <Card borderRadius={10} overflow={'hidden'}>
        <Image src={getCroppedImageUrl(game.background_image)} alt={game.name}/>
        <CardBody>
            <Heading fontSize={'2xl'}>{game.name}</Heading>
            <HStack justifyContent={'space-between'}>
                <PlatformIconList platforms={game.parent_platforms.map((platform) => platform.platform)}/>
                <CriticScore metacritic={game.metacritic}/>
            </HStack>
        </CardBody>
    </Card>
    
  )
}

export default GameCard;