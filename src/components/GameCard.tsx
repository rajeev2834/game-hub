import {Card, Image, CardBody, Heading, HStack} from '@chakra-ui/react'
import { Game } from '../hooks/useGames'
import PlatformIconList from './PlatformIconList';
import CriticScore from './CriticScore';
import getCroppedImageUrl from '../services/image-url';
import Emoji from './Emoji';



interface Props{
    game: Game;
}

const GameCard = ({game}: Props) => {
  return (
    <Card borderRadius={10} overflow={'hidden'}>
        <Image src={getCroppedImageUrl(game.background_image)} alt={game.name}/>
        <CardBody>
            <HStack justifyContent={'space-between'}>
                <PlatformIconList platforms={game.parent_platforms.map((platform) => platform.platform)}/>
                <CriticScore metacritic={game.metacritic}/>
            </HStack>
            <Heading fontSize={'2xl'}>{game.name} <Emoji rating={game.rating_top}/></Heading>
        </CardBody>
    </Card>
    
  )
}

export default GameCard;