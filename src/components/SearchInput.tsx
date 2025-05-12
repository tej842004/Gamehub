import { Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import { BsSearch } from "react-icons/bs";
import useGameQueryStore from "../store";

const SearchInput = () => {
  const setSearchText = useGameQueryStore((s) => s.setSearchText);

  return (
    <form>
      <InputGroup>
        <InputLeftElement children={<BsSearch />} />
        <Input
          onChange={(event) => setSearchText(event.target.value)}
          borderRadius={20}
          placeholder="Search game..."
          variant="filled"
        />
      </InputGroup>
    </form>
  );
};

export default SearchInput;
