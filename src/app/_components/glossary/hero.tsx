"use client";

import {
  Box,
  Flex,
  Text,
  Image,
} from "@chakra-ui/react";
import SearchBar, { SearchBarProps } from "../input/search-bar";

export default function GlossaryHero({ query, setQuery, handleSearch } : SearchBarProps) {
  
const offset = 10;
  return (
    <Flex
      position={"relative"}
      height={"36vh"} // Reduced height
      width={"100%"}
      bg="#ECF5F9"
      borderRadius="3xl"
      mt={10}
      zIndex={10}
    >
      {/* Left half with aurora-like gradient and text */}
      <Flex
        flex={1.5}
        direction={"column"}
        justifyContent={"center"}
        alignItems={"flex-start"}
        p={8}
        backgroundSize={"200% 200%"}
        animation={"aurora 10s ease infinite"}
        color={"white"}
      >
        <Box maxW={"600px"}>
          <Text
            fontWeight={900}
            fontSize={"6xl"}
            lineHeight={"110%"}
            color={"black"}
            mb={3}
          >
            Glossary
          </Text>
          <Text fontSize={"lg"} mb={10} color="text.gray">
            <Text as="span" color="primaryBlue" fontWeight={500}>
              ICPCoins Academy
            </Text>{" "}
            is the leading site for all things iCP. Read a new term that you
            want more context on? Just look it up here.
          </Text>
          <SearchBar {...{query, setQuery, handleSearch}}/>
        </Box>
      </Flex>

      {/* Right half with GIF background */}
      <Flex flex={1} position={"relative"} alignItems={"center"}>
        <Box
          as="span"
          fontSize="200px" // Adjust size as needed
          fontWeight="900"
          background="linear-gradient(90deg, #0EA5E940, #0EA5E9)"
          backgroundClip="text"
          color="transparent"
          display="inline-block"
          position="absolute"
          top={-28}
          left={-10 - offset}
        >
          G
        </Box>
        <Box
          as="span"
          fontSize="200px" // Adjust size as needed
          fontWeight="900"
          background="linear-gradient(90deg, #deb81b, #deb81b40)"
          backgroundClip="text"
          color="transparent"
          display="inline-block"
          position="absolute"
          bottom={-24}
          right={offset - 7}
        >
          O
        </Box>
        <Image
          src="/assets/images/img_glossary.webp"
          alt="Web Technology Image"
          objectFit="cover"
          objectPosition="center"
          width="75%"
          position="absolute"
        //   top={10}
          left={14 - offset}
          
        />
      </Flex>
    </Flex>
  );
}
