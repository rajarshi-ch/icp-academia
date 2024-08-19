
import { InputGroup, InputLeftElement, Input, IconButton, useColorMode, useColorModeValue } from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons";
import { Dispatch, SetStateAction, FormEvent } from "react";

export interface SearchBarProps {
  query: string;
  setQuery: Dispatch<SetStateAction<string>>;
  handleSearch: (e: FormEvent<HTMLFormElement>) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ query, setQuery, handleSearch }) => {

  return (
    <form onSubmit={handleSearch}>
      <InputGroup size={'lg'}>
        <InputLeftElement pointerEvents="none">
          <SearchIcon color="gray.300" />
        </InputLeftElement>
        <Input
          type="text"
          placeholder="Search..."
          value={query}
          color={"text.gray"}
          bg={useColorModeValue("white", "transparent")}
          boxShadow='md'
          onChange={(e) => setQuery(e.target.value)}
        />
      </InputGroup>
    </form>
  );
};

export default SearchBar;