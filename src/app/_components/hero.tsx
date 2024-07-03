"use client";

import {
  Box,
  Flex,
  Heading,
  Text,
  Button,
  Stack,
  Image,
} from "@chakra-ui/react";
import { useRouter } from "next/navigation";

export default function Hero() {
  const router = useRouter();

  return (
    <Flex
      position={"relative"}
      height={"50vh"} // Reduced height
      width={"100%"}
      overflow={"hidden"}
    >
      {/* Left half with aurora-like gradient and text */}
      <Flex
        flex={1}
        direction={"column"}
        justifyContent={"center"}
        alignItems={"flex-start"}
        p={8}
        bgGradient={
          "linear(to-br, rgba(138, 43, 226, 0.7), rgba(0, 0, 255, 0.7), rgba(238, 130, 238, 0.7))"
        }
        backgroundSize={"200% 200%"}
        animation={"aurora 10s ease infinite"}
        color={"white"}
      >
        <Box maxW={"600px"}>
          <Heading
            fontWeight={600}
            fontSize={{ base: "2xl", sm: "3xl", lg: "4xl" }}
            lineHeight={"110%"}
            mb={3}
          >
            Demystifying the Web: <br />
            <Text as={"span"} color={"#FAFAD2"}>
              Your Guide to Web Technologies
            </Text>
          </Heading>
          <Text fontSize={"lg"} mb={4}>
            Explore our comprehensive glossary and educational resources on web
            development, design, and digital technologies.
          </Text>
          <Stack spacing={4} direction={"row"}>
            <Button
              rounded={"md"}
              size={"md"}
              fontWeight={"normal"}
              px={6}
              bg={"#ECC94B"}
              _hover={{ bg: "#F6E05E" }}
              onClick={() => {
                router.push("/glossary");
              }}
            >
              Explore Glossary
            </Button>
            <Button
              rounded={"md"}
              size={"md"}
              fontWeight={"normal"}
              px={6}
              variant={"outline"}
              _hover={{ bg: "rgba(255, 255, 255, 0.1)" }}
            >
              Learn More
            </Button>
          </Stack>
        </Box>
      </Flex>

      {/* Right half with GIF background */}
      <Flex flex={1} position={"relative"}>
        <Image
          src="https://i.pinimg.com/originals/1a/a4/60/1aa4608ae3ec6562dc394ab747b26124.gif"
          alt="Web Technology GIF"
          objectFit="cover"
          objectPosition="center"
          width="100%"
          height="100%"
        />
      </Flex>
    </Flex>
  );
}
