"use client";
import React from "react";
import { Box, SimpleGrid, Text, Icon, HStack } from "@chakra-ui/react";
import { FiExternalLink } from "react-icons/fi";

import { CustomH2 } from "../styled-text";

interface NeutriniteProject {
  id: number;
  title: string;
  image: string;
  url: string;
}

export default function OtherNeutriiteProjects() {
  const projects: NeutriniteProject[] = [
    {
      id: 1,
      title: "Icpcoins",
      image: "path/to/icpcoins-image.jpg",
      url: "https://icpcoins.com",
    },
    {
      id: 2,
      title: "DeVeFi",
      image: "path/to/devefi-image.jpg",
      url: "https://vectors.icpcoins.com/",
    },
    {
      id: 3,
      title: "Top Defi Canisters",
      image: "path/to/top-defi-canisters-image.jpg",
      url: "https://icpcoins.com/#/topcans",
    },
  ];
  return (
    <Box py={{ base: 0, md: 8 }} mb={8}>
      {/* <CustomH2 textAlign="center">Basics</CustomH2> */}
      {/* <Text fontSize={"lg"} mb={10} color="text.gray" textAlign={"center"}>
        Other projects by Neutrinite
      </Text> */}
      <SimpleGrid columns={{ base: 1, md: 3 }} spacing={{ base: 4, md: 10 }}>
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </SimpleGrid>
    </Box>
  );
}

function ProjectCard({ project }: { project: NeutriniteProject }) {
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
      bg="linear-gradient(135deg, #a1c4fd50 0%, #c2e9fb40 50%)"
      transition="all 0.2s"
      _hover={{
        transform: "translateY(-2px)",
        boxShadow: "sm",
        bg: "linear-gradient(135deg, #a1c4fd50 0%, #c2e9fb40 70%)",
      }}
    >
      <HStack justifyContent="space-between">
        <Box>
          <Text
            fontSize={{ base: "lg", md: "xl" }}
            fontWeight="bold"
            mb={{ base: 1, md: 2 }}
          >
            {project.title}
          </Text>
          <Text fontSize={{ base: "sm", md: "md" }} color="gray.500">
            {project.url}
          </Text>
        </Box>
        <Icon as={FiExternalLink} color="gray.900" />
      </HStack>
    </Box>
  );
}
