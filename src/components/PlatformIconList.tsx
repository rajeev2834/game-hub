import {Text, Icon} from '@chakra-ui/react'
import { Platform } from "../hooks/useGames";

import {FaApple, FaWindows, FaXbox, FaLinux, FaAndroid, FaPlaystation} from 'react-icons/fa'
import { IconType } from 'react-icons';
import { HStack } from '@chakra-ui/react';

interface Props{
    platforms: Platform[];
}

const PlatformIconList = ({platforms} : Props) => {

 const iconMap : {[key: string]: IconType} = {
     pc: FaWindows,
     xbox: FaXbox,
     playstation: FaPlaystation,
     linux: FaLinux,
     android: FaAndroid,
     mac: FaApple
 }
  return (
    <>
    <HStack marginY={4}>
      {platforms.map((platform) => (
          <Icon as={iconMap[platform.slug]} key={platform.id} color='gray.500'></Icon>
      ))}
      </HStack>
    </>
  )
}

export default PlatformIconList;