import { Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import { BsSearch } from "react-icons/bs";

interface Props {
  onSearch: (searchText: string) => void;
}

const SearchInput = ({ onSearch }: Props) => {
  return (
    <form>
      <InputGroup>
        <InputLeftElement children={<BsSearch />} />
        <Input
          onChange={(event) => onSearch(event.target.value)}
          borderRadius={20}
          placeholder="Search game..."
          variant="filled"
        />
      </InputGroup>
    </form>
  );
};

export default SearchInput;
