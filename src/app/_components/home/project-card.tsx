"use client";
import React from "react";
import {
  Box,
  Text,
  Icon,
  HStack,
  useColorModeValue,
  AspectRatio,
  Image,
} from "@chakra-ui/react";
import { FiExternalLink } from "react-icons/fi";

import IcpProject from "@/interfaces/icpProject";

export default function ProjectCard({ project }: { project: IcpProject }) {
  const lightGradient = "linear-gradient(135deg, #a1c4fd50 0%, #c2e9fb40 50%)";
  const darkGradient = "linear-gradient(135deg, #667eea10 0%, #764ba280 50%)"; // Darker and more opaque
  const gradient = useColorModeValue(lightGradient, darkGradient);

  return (
    <Box
      as="a"
      href={project.url}
      target="_blank"
      rel="noopener noreferrer"
      p={{ base: 2, md: 4 }}
      px={4}
      borderWidth="1px"
      //borderColor="black"
      borderRadius="lg"
      overflow="hidden"
      bg={gradient}
      transition="all 0.2s"
      _hover={{
        transform: "translateY(-2px)",
        boxShadow: "sm",
      }}
    >
      <AspectRatio ratio={16 / 9} width={"100%"} mb={{ base: 2, md: 4 }}>
        <Image
          src={project.image}
          alt="Web Technology Image"
          objectFit="cover"
          objectPosition="center"
          width="100%"
          height="100%"
          borderRadius="lg" // Added to make the edges rounded
        />
      </AspectRatio>
      <HStack justifyContent="space-between">
        <Box>
          <Text
            fontSize={{ base: "lg", md: "xl" }}
            fontWeight="bold"
            mb={{ base: 1, md: 2 }}
          >
            {project.title}
          </Text>
          <Text
            fontSize={{ base: "sm", md: "md" }}
            color={useColorModeValue("gray.500", "gray.300")}
          >
            {project.description}
          </Text>
        </Box>
        <Icon
          as={FiExternalLink}
          color={useColorModeValue("gray.900", "gray.00")}
          boxSize={5}
        />
      </HStack>
    </Box>
  );
}
