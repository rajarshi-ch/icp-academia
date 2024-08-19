"use client";

import {
  Box,
  Flex,
  Text,
  Image,
  AspectRatio,
  Divider,
  Grid,
} from "@chakra-ui/react";
import { MdCheckCircle } from "react-icons/md";
import { colors } from "../../theme";
import { BodyText, CustomH2 } from "../styled-text";

export default function LearnICPSection() {
  return (
    <Flex
      height={{ base : "750px" , md : "56vh"}} // Reduced height
      width={"100%"}
      overflow={"hidden"}
      direction={{ base: "column", md: "row" }}
    >
      <Flex flex={1} position={"relative"} alignItems={"center"} pt={{base : 4 , md : 0}} >
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
        p={{ base: 0, md: 8 }}
        ml={{ base: 0, md: 8 }}
        animation={"aurora 10s ease infinite"}
        color={"white"}
      >
        <Box maxW={"600px"}>
          <CustomH2>Why learn about ICP ?</CustomH2>
          <BodyText >
            The Internet Computer Protocol (ICP) is a blockchain project
            developed by the DFINITY Foundation. It aims to extend the
            functionality of the internet by enabling smart contracts and
            decentralized applications (dApps) to run at web speed, with
            unlimited capacity.
          </BodyText>
          <Divider />
          <ICPHighlightsList />
          <Divider py={4} display={{ md : 'none'}}/>
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
    <Grid templateColumns="repeat(2, 1fr)" gap={4} pt={4} pl={{ base : 8 , md : 0}}>
      {icpHighlights.map((highlight, index) => (
        <Flex key={index} alignItems="center">
          <MdCheckCircle color={colors.secondaryBlue} />
          <Text ml={2}>{highlight}</Text>
        </Flex>
      ))}
    </Grid>
  );
}
