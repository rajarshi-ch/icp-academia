"use client";

import React, { useState, useEffect, useRef, FC } from "react";
import { Box, HStack, Button, Spacer } from "@chakra-ui/react";
import { GlossaryItem } from "@/interfaces/glossary";
import GlossaryHero from "./hero";
import GlossaryListSection from "./list-section";
import { useSearchParams } from "next/navigation";

export default function Glossary({
  glossaryItems,
}: {
  glossaryItems: GlossaryItem[];
}) {
  if (!glossaryItems) return;

  const [filteredTerms, setFilteredTerms] = useState<GlossaryItem[]>([]);
  const [termsMap, setTermsMap] = useState<Map<string, GlossaryItem[]>>(
    new Map()
  );
  const alphabet = "#ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
  const [query, setQuery] = useState("");

  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    //Nothing to do , as s
  };
  const refs = useRef<{ [key: string]: HTMLDivElement | null }>({});

  const scrollToLetter = (letter: string) => {
    if (refs.current[letter]) {
      refs.current[letter]!.scrollIntoView({ behavior: "smooth" });
    }
  };

  useEffect(() => {
    const filtered = glossaryItems.filter((term) =>
      term.title.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredTerms(filtered);
  }, [query, glossaryItems]);

  useEffect(() => {
    const map = new Map<string, GlossaryItem[]>();

    // Initialize map with A-Z and #
    alphabet.forEach((letter) => {
      map.set(letter, []);
    });

    // Populate the map
    filteredTerms.forEach((term) => {
      const firstChar = term.title.charAt(0).toUpperCase();
      if (map.has(firstChar)) {
        map.get(firstChar)!.push(term);
      } else {
        map.get("#")!.push(term);
      }
    });

    // Sort the terms alphabetically within each key
    map.forEach((terms, key) => {
      terms.sort((a, b) => a.title.localeCompare(b.title));
    });

    setTermsMap(map);
  }, [filteredTerms]);

  const searchParams = useSearchParams();

  useEffect(() => {
    const searchQuery = searchParams.get("search");
    if (searchQuery) {
      setQuery(searchQuery);
    }
  }, [searchParams]);

  return (
    <Box width="100%">
      <GlossaryHero {...{ query, setQuery, handleSearch }} />
      {/* <Input
        placeholder="Search terms..."
        mb={4}
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      /> */}
      <Box
        bg="#ECF5F9EF"
        borderRadius={"full"}
        position="sticky"
        top={6}
        zIndex={20}
        mt={2}
        mb={8}
        py={2}
      >
        <HStack spacing={2} overflowX="auto">
          <Spacer />

          {alphabet.map((letter) => (
            <AlphabetButton
              key={letter}
              letter={letter}
              setSelectedLetter={(letter) => scrollToLetter(letter)}
            />
          ))}
          <Spacer />
        </HStack>
      </Box>
      {/* <SimpleGrid columns={{ base: 1, md: 2 }} spacing={8}>
        {filteredTerms.map((term) => (
          <Link href={`/glossary/${term.slug}`} key={term.title} passHref>
            <ChakraLink
              textDecoration="none"
              _hover={{ textDecoration: "none" }}
            >
              <Box borderWidth={1} borderRadius="lg" p={4}>
                <Text fontWeight="bold" fontSize="lg" mb={2}>
                  {term.title.toUpperCase()}
                </Text>
                <Text>{term.description}</Text>
              </Box>
            </ChakraLink>
          </Link>
        ))}
      </SimpleGrid> */}

      {Array.from(termsMap.keys()).map((letter) => (
        <>
          {/* @ts-ignore */}
          <div key={letter} ref={(el) => (refs.current[letter] = el)}>
            <GlossaryListSection
              alphabet={letter}
              glossaryItems={termsMap.get(letter)!}
            />
          </div>
        </>
      ))}
    </Box>
  );
}

interface AlphabetButtonProps {
  letter: string;

  setSelectedLetter: (letter: string) => void;
}

const AlphabetButton: FC<AlphabetButtonProps> = ({
  letter,

  setSelectedLetter,
}) => {
  return (
    <Button
      key={letter}
      size="sm"
      variant="solid"
      bg="transparent"
      onClick={() => setSelectedLetter(letter)}
    >
      {letter}
    </Button>
  );
};
