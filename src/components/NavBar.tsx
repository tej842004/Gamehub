import { HStack, Image, Show } from "@chakra-ui/react";

import logo from "../assets/logo.webp";
import ColorModeSwitch from "./ColorModeSwitch";
import SearchInput from "./SearchInput";
import GenreDrawerMenu from "./GenreDrawerMenu";
import { Genre } from "../hooks/useGenres";

interface Props {
  onSearch: (searchText: string) => void;
  selectedGenre: Genre | null;
  onSelectGenre: (genre: Genre) => void;
}

const NavBar = ({ onSearch, onSelectGenre, selectedGenre }: Props) => {
  return (
    <div>
      <HStack padding="10px">
        <Show below="lg">
          <GenreDrawerMenu
            onSelectGenre={onSelectGenre}
            selectedGenre={selectedGenre}
          />
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
