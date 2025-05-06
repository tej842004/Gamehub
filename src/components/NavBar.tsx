import { HStack, Image, Show } from "@chakra-ui/react";

import logo from "../assets/logo.webp";
import ColorModeSwitch from "./ColorModeSwitch";
import SearchInput from "./SearchInput";
import HamburgerIcon from "./HamburgerIcon";

interface Props {
  onSearch: (searchText: string) => void;
}

const NavBar = ({ onSearch }: Props) => {
  return (
    <div>
      <HStack padding="10px">
        <Show below="lg">
          <HamburgerIcon />
        </Show>
        <Show above="lg">
          <Image src={logo} boxSize="60px" />
        </Show>
        <SearchInput onSearch={onSearch} />
        <ColorModeSwitch />
      </HStack>
    </div>
  );
};

export default NavBar;
