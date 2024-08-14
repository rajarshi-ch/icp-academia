"use client";

import {
  Box,
  Flex,
  Text,
  Stack,
  Image,
  AspectRatio,
  Divider,
  Grid,
} from "@chakra-ui/react";
import { useRouter } from "next/navigation";
import PrimaryButton from "./buttons/primary-button";
import SearchBar from "./input/search-bar";
import { MdCheckCircle } from "react-icons/md";
import { colors } from "../theme";

export default function LearnICPSection() {
  const router = useRouter();
  return (
    <Flex
      position={"relative"}
      height={"56vh"} // Reduced height
      width={"100%"}
      overflow={"hidden"}
    >
      <Flex flex={1} position={"relative"} alignItems={"center"}>
        <AspectRatio ratio={4 / 3} width={"100%"}>
          <Image
            src="/assets/images/bc_3.jpg"
            alt="Web Technology Image"
            objectFit="cover"
            objectPosition="center"
            width="100%"
            height="100%"
            borderRadius="50px" // Added to make the edges rounded
          />
        </AspectRatio>
      </Flex>

      <Flex
        flex={1.5}
        direction={"column"}
        justifyContent={"center"}
        alignItems={"flex-start"}
        p={8}
        ml={8}
        backgroundSize={"200% 200%"}
        animation={"aurora 10s ease infinite"}
        color={"white"}
      >
        <Box maxW={"600px"}>
          <Text
            fontWeight={900}
            fontSize={"4xl"}
            lineHeight={"110%"}
            color={"black"}
            mb={3}
          >
            Why learn about ICP ?
          </Text>
          <Text fontSize={"lg"} mb={4} color="text.gray">
            The Internet Computer Protocol (ICP) is a blockchain project
            developed by the DFINITY Foundation. It aims to extend the
            functionality of the internet by enabling smart contracts and
            decentralized applications (dApps) to run at web speed, with
            unlimited capacity.
          </Text>
          <Divider />
          <ICPHighlightsList />
        </Box>
      </Flex>
    </Flex>
  );
}

function ICPHighlightsList() {
  const icpHighlights = [
    "Decentralized",
    "Cloud",
    "Secure",
    "Scalable",
    "Open",
    "Web Speed",
  ];
  return (
    <Grid templateColumns="repeat(2, 1fr)" gap={4} pt={4}>
      {icpHighlights.map((highlight, index) => (
        <Flex key={index} alignItems="center">
          <MdCheckCircle color={colors.secondaryBlue} />
          <Text ml={2}>{highlight}</Text>
        </Flex>
      ))}
    </Grid>
  );
}
