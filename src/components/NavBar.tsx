import { Flex, HStack, Image, Spacer } from "@chakra-ui/react";
import logo from '../assets/logo.webp'
import ColorModeSwitch from './ColorModeSwitch';
import SearchInput from "./SearchInput";


const NavBar = () => {
  return (
    <Flex padding={2} alignItems="center"> 
      <Image src={logo} boxSize="60px" />
      <ColorModeSwitch />
      <SearchInput  />
    </Flex>
  );
};

export default NavBar;
