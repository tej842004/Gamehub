import { HStack, Image, Show } from "@chakra-ui/react";

import logo from "../assets/logo.webp";
import ColorModeSwitch from "./ColorModeSwitch";
import GenreDrawerMenu from "./GenreDrawerMenu";
import SearchInput from "./SearchInput";

const NavBar = () => {
  return (
    <div>
      <HStack padding="10px">
        <Show below="lg">
          <GenreDrawerMenu />
        </Show>
        <Show above="lg">
          <Image src={logo} boxSize="60px" />
        </Show>
        <SearchInput />
        <ColorModeSwitch />
      </HStack>
    </div>
  );
};

export default NavBar;
