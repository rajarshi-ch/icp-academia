import React from "react";
import { Box, Text, VStack, Badge } from "@chakra-ui/react";
import { GlossaryItem } from "@/interfaces/glossary";
import LearnMoreButton from "../buttons/learn-more-button";
import { BodyText } from "../styled-text";

// Define types

interface GlossaryCardProps {
  glossaryTerm: GlossaryItem;
}

const GlossaryCard: React.FC<GlossaryCardProps> = ({ glossaryTerm }) => {
  return (
    <Box
      borderWidth="1px"
      borderRadius="2xl"
      overflow="hidden"
      boxShadow="sm"
      _hover={{
        boxShadow: "md",
        transform: "translateY(-2px)",
      }}
    >
      <VStack align="start" p={4} spacing={5} py={8}>
        <Badge
          bg="secondaryBlue"
          color="white"
          fontSize="sm"
          py={1.5}
          px={3}
          borderRadius="md"
        >
          Glossary
        </Badge>
        <Text fontSize="lg" fontWeight={600}>
          {glossaryTerm.title}
        </Text>
        <Box w="20%" h="3px" bg="secondaryBlue" borderRadius="full" />
        <BodyText fontSize="sm">{glossaryTerm.description}</BodyText>
        <LearnMoreButton url={`/glossary/${glossaryTerm.slug}`} />
      </VStack>
    </Box>
  );
};

export default GlossaryCard;
