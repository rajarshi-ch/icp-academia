
import { InputGroup, InputLeftElement, Input, IconButton } from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons";
import { useRouter } from "next/navigation";
import { useState } from "react";

const SearchBar: React.FC = () => {
  const router = useRouter();
  const [query, setQuery] = useState("");

  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (query.trim()) {
      router.push(`/glossary?search=${query}`);
    }
  };

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
          onChange={(e) => setQuery(e.target.value)}
        />
      </InputGroup>
    </form>
  );
};

export default SearchBar;