import React from "react";
import { Badge } from "@chakra-ui/react";

interface DifficultyBadgeProps {
  level: "Beginner" | "Intermediate" | "Advanced";
}

const levelColor: Record<DifficultyBadgeProps["level"], string> = {
  Beginner: "teal",
  Intermediate: "yellow",
  Advanced: "red",
};

const DifficultyBadge: React.FC<DifficultyBadgeProps> = ({ level }) => {
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

export default DifficultyBadge;