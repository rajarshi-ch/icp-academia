import React from "react";
import { Box, Heading, Tag, HStack, Text, Flex } from "@chakra-ui/react";
import { DifficultyBadgeV2 } from "./difficulty-badge";
import { DifficultyLevel } from "@/interfaces/difficulty";

interface PostHeaderProps {
  item: {
    title: string;
    difficulty: DifficultyLevel;
    tags: string[];
  };
}

const PostHeader: React.FC<PostHeaderProps> = ({ item }) => {
  return (
    <Box mb={6}>
      <Heading as="h1" size="xl" mb={4}>
        {item.title}
      </Heading>

      <Flex align="center" mb={4}>
        <DifficultyBadgeV2 level={item.difficulty} />
      </Flex>

      <HStack spacing={2} wrap="wrap">
        {item.tags.map((tag, index) => (
          <Tag key={index} size="md" variant="subtle" colorScheme="blue">
            {tag}
          </Tag>
        ))}
      </HStack>
    </Box>
  );
};

export default PostHeader;
