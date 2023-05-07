import {HStack, Image, Text} from "@chakra-ui/react";
import logo from "../assets/logo.webp";
import ToggleDarkColor from "./ToggleDarkColor";


function NavBar() {

    return(
        <HStack justifyContent={"space-between"} padding ={"10px"}>
            <Image src={logo} alt="logo" boxSize='60px'/>
            <Text>My Game App</Text>
            <ToggleDarkColor/>
        </HStack>
    );
}

export default NavBar;
