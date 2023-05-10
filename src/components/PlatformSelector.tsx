import { Menu, MenuButton, Button, MenuList, MenuItem, Text} from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";
import usePlatforms from "../hooks/usePlatforms";
import { Platform } from "../hooks/useGames";

interface Props{
    onSelectPlatform: (platform: Platform) => void;
    selectedPlatform: Platform | null;
}
const PlatformSelector = ({onSelectPlatform, selectedPlatform} : Props) => {
    const {platforms, error} = usePlatforms();

    if (error) {
        return null;
    }
    
  return (
    <>
        <Menu>
        <MenuButton as={Button} rightIcon={<BsChevronDown/>}>
            {selectedPlatform?.name || "All Platforms"}
        </MenuButton>
        <MenuList>
            {platforms.map((platform) => (
            <MenuItem onClick={() => onSelectPlatform(platform)} key={platform.id}>{platform.name}</MenuItem>
            ))}
        </MenuList>
        </Menu>
    </>
  )
}

export default PlatformSelector;