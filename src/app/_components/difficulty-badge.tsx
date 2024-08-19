import React from "react";
import { Badge, Box , Text , useColorModeValue } from "@chakra-ui/react";
import { DifficultyLevel } from "@/interfaces/difficulty";

interface DifficultyBadgeProps {
  level: DifficultyLevel;
}

const levelColor: Record<DifficultyLevel, string> = {
  Beginner: "teal",
  Intermediate: "yellow",
  Advanced: "red",
};

export const DifficultyBadgeV1: React.FC<DifficultyBadgeProps> = ({
  level,
}) => {
  return (
    <Badge
      variant="outline"
      colorScheme={levelColor[level]}
      borderRadius="md"
      size="sm"
      px={2}
      py={1}
    >
      {level}
    </Badge>
  );
};


const getDifficultyColor = (difficulty: DifficultyLevel) => {
  switch (difficulty) {
    case "Beginner":
      return "green";
    case "Intermediate":
      return "yellow";
    case "Advanced":
      return "red";
    default:
      return "gray";
  }
};

export const DifficultyBadgeV2: React.FC<DifficultyBadgeProps> = ({
  level,
}) => {
  return (
    <Box
      display="inline-flex"
      alignItems="center"
      bg={`${getDifficultyColor(level)}.100`}
      color={`${getDifficultyColor(level)}.800`}
      px={3}
      py={1}
      borderRadius="full"
      fontSize="sm"
      fontWeight="medium"
    >
      <Box
        as="span"
        w={2}
        h={2}
        borderRadius="full"
        bg={`${getDifficultyColor(level)}.500`}
        mr={2}
      />
      <Text color='text.blueBlack'>{level}</Text>
    </Box>
  );
};
