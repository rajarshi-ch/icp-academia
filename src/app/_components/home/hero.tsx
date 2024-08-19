"use client";

import {
  Box,
  Flex,
  Heading,
  Text,
  Button,
  Stack,
  Image,
  AspectRatio,
} from "@chakra-ui/react";
import { useRouter } from "next/navigation";
import PrimaryButton from "../buttons/primary-button";
import SearchBar from "../input/search-bar";
import { useState } from "react";
import { CustomH1 } from "../styled-text";
import { ArrowForwardIcon } from "@chakra-ui/icons";

export default function HomeHero() {
  const router = useRouter();
  const [query, setQuery] = useState("");

  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (query.trim()) {
      router.push(`/glossary?search=${query}`);
    }
  };

  return (
    <Flex
      // position={"relative"}
      height={"56vh"} // Reduced height
      width={"100%"}
      overflow={"hidden"}
    >
      {/* Left half with aurora-like gradient and text */}
      <Flex
        flex={1.5}
        direction={"column"}
        justifyContent={"center"}
        alignItems={"flex-start"}
        py={8}
        backgroundSize={"200% 200%"}
        animation={"aurora 10s ease infinite"}
        color={"white"}
      >
        <Box maxW={"600px"}>
          <CustomH1> All you need to know about ICP, in one place.</CustomH1>
          <Text fontSize={"lg"} mb={4} color="text.gray">
            <Text as="span" color="primaryBlue" fontWeight={500}>
              ICPCoins Academy
            </Text>
            {" "}is the leading site for all things iCP. Read a new term that you want more context on? Just look it up here.
          </Text>
          <Stack spacing={4} direction={{ base : "column" , md : "row" }} marginTop={10}>
            <PrimaryButton url="/glossary" trailingIcon={<ArrowForwardIcon />}>Glossary</PrimaryButton>
            <SearchBar {...{query, setQuery, handleSearch}} />
          </Stack>
        </Box>
      </Flex>

      {/* Right half with GIF background */}
      <Flex
        flex={1}
        position={"relative"}
        alignItems={"center"}
        display={{ base: "none", md: "flex" }}
      >
        <AspectRatio ratio={1} width={"100%"}>
          <Image
            src="/assets/images/bc_1.jpg"
            alt="Web Technology Image"
            objectFit="cover"
            objectPosition="center"
            width="100%"
            height="100%"
            borderRadius="50px" // Added to make the edges rounded
          />
        </AspectRatio>
      </Flex>
    </Flex>
  );
}
