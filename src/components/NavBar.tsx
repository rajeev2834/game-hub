import {HStack, Image, Text} from "@chakra-ui/react";
import logo from "../assets/logo.webp";
import ToggleDarkColor from "./ToggleDarkColor";
import SearchInput from "./SearchInput";

/*interface Props{
    onSearch: (value: string) => void;
}*/

function NavBar() {

    return(
        <HStack padding ={"10px"}>
            <Image src={logo} alt="logo" boxSize='60px'/>
            <Text whiteSpace={'nowrap'}>My Game App</Text>
            <SearchInput/>
            <ToggleDarkColor/>
        </HStack>
    );
}

export default NavBar;
