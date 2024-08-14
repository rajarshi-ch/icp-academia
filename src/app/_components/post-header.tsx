import React from "react";
import { Box, Heading, Tag, HStack, Text, Flex } from "@chakra-ui/react";
import { GlossaryItem } from "@/interfaces/glossary";

interface PostHeaderProps {
  item: GlossaryItem;
}

const PostHeader: React.FC<PostHeaderProps> = ({ item }) => {
  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty.toLowerCase()) {
      case "beginner":
        return "green";
      case "intermediate":
        return "yellow";
      case "advanced":
        return "red";
      default:
        return "gray";
    }
  };

  return (
    <Box mb={6}>
      <Heading as="h1" size="xl" mb={4}>
        {item.title}
      </Heading>

      <Flex align="center" mb={4}>
        <Box
          display="inline-flex"
          alignItems="center"
          bg={`${getDifficultyColor(item.difficulty)}.100`}
          color={`${getDifficultyColor(item.difficulty)}.800`}
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
            bg={`${getDifficultyColor(item.difficulty)}.500`}
            mr={2}
          />
          <Text>{item.difficulty}</Text>
        </Box>
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
