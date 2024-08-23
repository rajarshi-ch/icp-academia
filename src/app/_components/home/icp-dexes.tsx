"use client";
import React from "react";
import { Box, SimpleGrid } from "@chakra-ui/react";

import { BodyText } from "../styled-text";
import IcpProject from "@/interfaces/icpProject";
import ProjectCard from "./project-card";

export default function IcpDexes() {
  const projects: IcpProject[] = [
    {
      id: 1,
      title: "ICPSwap",
      image: "/assets/images/ICPSwap.png",
      url: "https://app.icpswap.com/swap",
      description:
        "ICPSwap is a hub that provides full-stack financial, market, and DAO services on ICP.",
    },
    {
      id: 2,
      title: "SonicDEX",
      image: "/assets/images/SonicDex.png",
      url: "https://app.sonic.ooo/swap",
      description:
        "Sonic is an open DeFi suite open internet service built on the Internet Computer blockchain.",
    },
    {
      id: 3,
      title: "ICDex",
      image: "/assets/images/ICDex.png",
      url: "https://icdex.io/",
      description: "A 100% on-chain Order Book Dex built on Internet Computer",
    },
  ];
  return (
    <Box py={{ base: 0, md: 8 }} mb={8}>
      <BodyText fontSize="lg" textAlign="center" pb={4}>
        ICP DEXs
      </BodyText>
      <SimpleGrid columns={{ base: 1, md: 3 }} spacing={{ base: 4, md: 10 }}>
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </SimpleGrid>
    </Box>
  );
}
