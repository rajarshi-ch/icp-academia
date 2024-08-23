"use client";
import React from "react";
import { Box, SimpleGrid } from "@chakra-ui/react";

import { BodyText } from "../styled-text";
import IcpProject from "@/interfaces/icpProject";
import ProjectCard from "./project-card";

export default function IcpEcosystemTools() {
  const projects: IcpProject[] = [
    {
      id: 1,
      title: "ICA Dashboard",
      image: "/assets/images/IcpDashboard.png",
      url: "https://dashboard.internetcomputer.org/",
      description:
        "Official ICP Dashboard maintained by Internet Computer Association, providing insights on all things ICP Network.",
    },
    {
      id: 2,
      title: "NNS DAO",
      image: "/assets/images/nnsDao.png",
      url: "https://nns.ic0.app/",
      description:
        "Network Nervous System DAO Front-end dapp allows users to hold ICP tokens and participate in DAO governance to earn voting rewards.",
    },
    {
      id: 3,
      title: "SNS DAO Launchpad",
      image: "/assets/images/snsLaunchpad.png",
      url: "https://nns.ic0.app/launchpad/",
      description:
        "Allows you to participate and track SNS DAOs on ICP Network",
    },
    {
      id: 4,
      title: "Internet Identity",
      image: "/assets/images/internetIdentity.png",
      url: "https://identity.ic0.app/",
      description:
        "Internet Identity is a decentralized identity solution running end-to-end on the Internet Computer blockchain.",
    },
  ];
  return (
    <Box py={{ base: 0, md: 8 }} mb={8}>
      <BodyText fontSize="lg" textAlign="center" pb={4}>
        ICP Ecosystem Tools
      </BodyText>
      <SimpleGrid columns={{ base: 1, md: 3 }} spacing={{ base: 4, md: 10 }}>
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </SimpleGrid>
    </Box>
  );
}
