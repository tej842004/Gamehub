import { HStack, Image, Show } from "@chakra-ui/react";

import logo from "../assets/logo.webp";
import { Genre } from "../hooks/useGenres";
import ColorModeSwitch from "./ColorModeSwitch";
import GenreDrawerMenu from "./GenreDrawerMenu";
import SearchInput from "./SearchInput";

interface Props {
  onSearch: (searchText: string) => void;
  selectedGenreId?: number;
  onSelectGenre: (genre: Genre) => void;
}

const NavBar = ({ onSearch, selectedGenreId, onSelectGenre }: Props) => {
  return (
    <div>
      <HStack padding="10px">
        <Show below="lg">
          <GenreDrawerMenu
            onSelectGenre={onSelectGenre}
            selectedGenreId={selectedGenreId}
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
