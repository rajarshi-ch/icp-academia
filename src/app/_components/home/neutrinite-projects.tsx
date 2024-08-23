"use client";
import React from "react";
import {
  Box,
  SimpleGrid,
} from "@chakra-ui/react";

import { BodyText } from "../styled-text";
import IcpProject from "@/interfaces/icpProject";
import ProjectCard from "./project-card";



export default function OtherNeutriiteProjects() {
  const projects: IcpProject[] = [
    {
      id: 1,
      title: "Icpcoins",
      image: "/assets/images/icpcoins_ss_dark.png",
      url: "https://icpcoins.com",
      description:
        "Your daily dashboard for navigating live ICP tokens data aggregated by Smart Contracts.",
    },
    {
      id: 2,
      title: "DeVeFi",
      image: "/assets/images/Devefi.png",
      url: "https://vectors.icpcoins.com/",
      description:
        "DeFi Vectors is a novel on chain Algotrading DeFi protocol invented by Neutrinite DAO",
    },
    {
      id: 3,
      title: "Top Defi Canisters",
      image: "/assets/images/Topcan.png",
      url: "https://icpcoins.com/#/topcans",
      description:
        "Monitor ICP DeFi activity live from DeFi Canisters of DAO and DEXs",
    },
  ];
  return (
    <Box py={{ base: 0, md: 8 }} mb={8}>
      <BodyText fontSize="lg" textAlign='center' pb={4}>
        Other DApps by Neutrinite DAO
      </BodyText>
      <SimpleGrid columns={{ base: 1, md: 3 }} spacing={{ base: 4, md: 10 }}>
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </SimpleGrid>
    </Box>
  );
}

