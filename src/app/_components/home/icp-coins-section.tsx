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

export default function IcpCoinsSection() {
  const router = useRouter();

  return (
    <Flex
      position={"relative"}
      width={"100%"}
      bg='tertiaryBlue'
      borderRadius='3xl'
    >
      {/* Left half with aurora-like gradient and text */}
      <Flex
        flex={1}
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
            fontSize={"4xl"}
            lineHeight={"110%"}
            color={"black"}
            mb={3}
          >
            All you need to know about ICP, in one place.
          </Text>
          <Text fontSize={"lg"} mb={4} color="text.gray">
            <Text as="span" color="primaryBlue" fontWeight={500}>
              icpcoins.com
            </Text>
            {" "}is the leading coin data aggregator on the ICP blockchain. Head on over for the latest data and trends.
          </Text>
          <PrimaryButton url="https://icpcoins.com/" isExternal={true} >icpcoins.com</PrimaryButton>
        </Box>
      </Flex>

      {/* Right half with GIF background */}
      <Flex
        flex={1}
        position={"relative"}
        alignItems={"center"}
        p={8}
      >
        <AspectRatio ratio={16/9} width={"100%"}>
          <Image
            src="/assets/images/icpcoins_ss_dark.png"
            alt="Web Technology Image"
            objectFit="cover"
            objectPosition="center"
            width="100%"
            height="100%"
            borderRadius="md" // Added to make the edges rounded
            _hover={
                {
                    transform: "scale(1.5)",
                    transition: "all 0.3s ease",
                }
            }
          />
        </AspectRatio>
      </Flex>
    </Flex>
  );
}
