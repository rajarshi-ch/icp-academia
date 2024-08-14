"use client";

import React, { useState, useEffect } from "react";
import {
  Box,
  Heading,
  Input,
  VStack,
  HStack,
  Text,
  Button,
  SimpleGrid,
  Link as ChakraLink,
} from "@chakra-ui/react";
import { GlossaryItem } from "@/interfaces/glossary";
import { getAllGlossaryItems } from "@/lib/api";
import Link from "next/link";

const Glossary = ({ glossaryItems }: { glossaryItems: GlossaryItem[] }) => {
  if (!glossaryItems) return;

  const [terms, setTerms] = useState<GlossaryItem[]>(glossaryItems);
  const [filteredTerms, setFilteredTerms] = useState<GlossaryItem[]>([]);
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [selectedLetter, setSelectedLetter] = useState<string>("All");

  useEffect(() => {
    const filtered = terms.filter(
      (term) =>
        term.title.toLowerCase().includes(searchQuery.toLowerCase()) &&
        (selectedLetter === "All" ||
          term.title.toUpperCase().startsWith(selectedLetter))
    );
    setFilteredTerms(filtered);
  }, [searchQuery, selectedLetter, terms]);

  const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");

  return (
    <Box maxWidth="1200px" margin="auto" padding={8}>
      <Heading as="h1" size="2xl" mb={8} textAlign="center">
        Glossary
      </Heading>

      <Input
        placeholder="Search terms..."
        mb={4}
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />

      <HStack spacing={2} overflowX="auto" pb={4} mb={4}>
        <Button
          size="sm"
          variant={selectedLetter === "All" ? "solid" : "outline"}
          onClick={() => setSelectedLetter("All")}
        >
          All
        </Button>
        {alphabet.map((letter) => (
          <Button
            key={letter}
            size="sm"
            variant={selectedLetter === letter ? "solid" : "outline"}
            onClick={() => setSelectedLetter(letter)}
          >
            {letter}
          </Button>
        ))}
      </HStack>

      <SimpleGrid columns={{ base: 1, md: 2 }} spacing={8}>
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
      </SimpleGrid>
    </Box>
  );
};

export default Glossary;
