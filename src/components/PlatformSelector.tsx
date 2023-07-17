import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";
import { Platform } from "../hooks/useGames";
import usePlatforms from "../hooks/usePlatforms";
import { usePlatformStore } from "../hooks/store";


const PlatformSelector = () => {
    const {platforms, setPlatforms} = usePlatformStore();
    
    const {data, error} = usePlatforms();

    console.log("Platform Rendered");

    if (error) {
        return null;
    }
    
  return (
    <>
        <Menu>
        <MenuButton as={Button} rightIcon={<BsChevronDown/>}>
            {platforms?.name || "All Platforms"}
        </MenuButton>
        <MenuList>
            {data?.results.map((platform) => (
            <MenuItem onClick={() => setPlatforms(platform)} key={platform.id}>{platform.name}</MenuItem>
            ))}
        </MenuList>
        </Menu>
    </>
  )
}

export default PlatformSelector;