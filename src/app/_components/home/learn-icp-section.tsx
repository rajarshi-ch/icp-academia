"use client";

import {
  Box,
  Flex,
  Text,
  Image,
  AspectRatio,
  Divider,
  Grid,
  useColorModeValue,
} from "@chakra-ui/react";
import { MdCheckCircle } from "react-icons/md";
import { colors } from "../../theme";
import { BodyText, CustomH2 } from "../styled-text";

export default function LearnICPSection() {
  return (
    <Flex
      // Reduced height
      width={"100%"}
      overflow={"hidden"}
      direction={{ base: "column", md: "row" }}
      mb={8}
    >
      <Flex
        flex={1}
        position={"relative"}
        alignItems={"center"}
        pt={{ base: 4, md: 0 }}
      >
        <AspectRatio ratio={1} width={"100%"}>
          <Image
            src="/assets/images/bc_3.jpg"
            alt="Web Technology Image"
            objectFit="cover"
            objectPosition="center"
            width="100%"
            height="100%"
            borderRadius="3xl" // Added to make the edges rounded
          />
        </AspectRatio>
      </Flex>

      <Flex
        flex={1.5}
        direction={"column"}
        justifyContent={"center"}
        alignItems={"flex-start"}
        p={{ base: 0, md: 8 }}
        ml={{ base: 0, md: 8 }}
        animation={"aurora 10s ease infinite"}
        color={"white"}
      >
        <Box maxW={"600px"}>
          <CustomH2>Why learn about ICP ?</CustomH2>
          <BodyText>
            Internet Computer Protocol (ICP) is a transformative
            third-generation blockchain that envisions the public internet as a
            decentralized global computer. Learning ICP allows you to build and
            deploy software as smart contracts on this infinitely scalable
            network, paving the way for a new era of decentralized,
            internet-powered applications built and running end to end on
            blockchain.
          </BodyText>
          <Divider />
          <ICPHighlightsList />
          <Divider py={4} display={{ md: "none" }} />
        </Box>
      </Flex>
    </Flex>
  );
}

function ICPHighlightsList() {
  const icpHighlights = [
    "Decentralized by DAO",
    "Secured by Consensus",
    "Web3 Cloud",
    "Robust Blockchain",
    "HTTPS Support",
    "Web Speed Network",
    "Unlimited Scalability",
    "Multi Chain Integration",
  ];
  return (
    <Grid
      templateColumns="repeat(2, 1fr)"
      gap={4}
      pt={4}
      pl={{ base: 8, md: 0 }}
    >
      {icpHighlights.map((highlight, index) => (
        <Flex key={index} alignItems="center">
          <MdCheckCircle color={colors.secondaryBlue} />
          <Text ml={2}>{highlight}</Text>
        </Flex>
      ))}
    </Grid>
  );
}
