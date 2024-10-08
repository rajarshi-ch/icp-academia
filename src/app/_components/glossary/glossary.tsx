"use client";

import React, { useState, useEffect, useRef, FC } from "react";
import {
  Box,
  HStack,
  Button,
  Spacer,
  Wrap,
  WrapItem,
  useBreakpointValue,
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  useColorModeValue,
} from "@chakra-ui/react";
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
  const isDesktop = useBreakpointValue({ base: false, md: true });

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
   if(glossaryItems.length > 0 && query.length > 0){
    const filtered = glossaryItems.filter((term) =>
      term.title.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredTerms(filtered);
   } else {
    setFilteredTerms(glossaryItems);
   }
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
      <AlphabetButtons
        alphabet={alphabet}
        scrollToLetter={scrollToLetter}
        isDesktop={isDesktop ?? true}
      />

      {Array.from(termsMap.keys()).map((letter) => (
      
          <div key={`${letter}_section`} ref={(el) => { refs.current[letter] = el; }}>
            <GlossaryListSection
              alphabet={letter}
              glossaryItems={termsMap.get(letter)!}
            />
          </div>
      ))}
    </Box>
  );
}

interface AlphabetButtonProps {
  letter: string;

  onClick: (letter: string) => void;
}

const AlphabetButton: FC<AlphabetButtonProps> = ({
  letter,

  onClick,
}) => {
  return (
    <Button
      key={letter}
      size="sm"
      variant="solid"
      bg="transparent"
      onClick={() => onClick(letter)}
    >
      {letter}
    </Button>
  );
};

interface AlphabetButtonsProps {
  alphabet: string[];
  scrollToLetter: (letter: string) => void;
  isDesktop: boolean;
}
const AlphabetButtons: React.FC<AlphabetButtonsProps> = ({
  alphabet,
  scrollToLetter,
  isDesktop,
}) => {
  const buttons = alphabet.map((letter) => (
    <AlphabetButton
      key={letter}
      letter={letter}
      onClick={(letter) => scrollToLetter(letter)}
    />
  ));
  const bgColor = useColorModeValue("#ECF5F9EF", "darkMode.backgroundGray");
  return isDesktop ? (
    <Box
      bg={bgColor}
      borderRadius={"full"}
      position="sticky"
      top={6}
      zIndex={20}
      mt={2}
      mb={8}
      py={2}
    >
      <HStack
        gap="auto"
        overflowX="hidden"
        justifyContent="space-around"
        px={8}
        wrap="wrap"
      >
        {buttons}
      </HStack>
    </Box>
  ) : (
    // <Box
    //   bg="#ECF5F9EF"
    //   borderRadius={"lg"}
    //   position="sticky"
    //   top={6}
    //   zIndex={20}
    //   mt={2}
    //   mb={2}
    //   py={2}
    // >
    //   <Wrap spacing="6px" justify="center" px={8}>
    //     {buttons.map((button) => (
    //       <WrapItem key={button.key}>{button}</WrapItem>
    //     ))}
    //   </Wrap>
    // </Box>

    <Accordion
      allowToggle
      bg={bgColor}
      borderRadius={"lg"}
      position="sticky"
      top={6}
      zIndex={20}
      mt={2}
      mb={2}
      py={2}
    >
      <AccordionItem border="none">
        <AccordionPanel pb={4}>
          <Wrap spacing="6px" justify="center">
            {buttons.map((button) => (
              <WrapItem key={button.key}>{button}</WrapItem>
            ))}
          </Wrap>
        </AccordionPanel>
        <AccordionButton justifyContent={"center"}>
          <AccordionIcon />
        </AccordionButton>
      </AccordionItem>
    </Accordion>
  );
};
