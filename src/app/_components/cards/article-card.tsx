import React from "react";
import {
  Box,
  Image,
  Text,
  Tag,
  HStack,
  VStack,
  Flex,
  AspectRatio,
} from "@chakra-ui/react";
import { TimeIcon } from "@chakra-ui/icons";
import { IArticle } from "@/interfaces/article";
import {DifficultyBadgeV2} from "../difficulty-badge";
import { formatDate } from "@/lib/utils";
import Link from "next/link"; // Add this import
// Define types

interface ArticleCardProps {
  article: IArticle;
}

const ArticleCard: React.FC<ArticleCardProps> = ({ article }) => {
  return (
    <Box
      as={Link}
      href={`/articles/${article.slug}`}
      borderWidth="1px"
      borderRadius="2xl"
      overflow="hidden"
      boxShadow="sm"
      _hover={{
        boxShadow: "md",
        transform: "translateY(-2px)",
      }}
    >
      <Box position="relative">
        <AspectRatio ratio={1.8} width="100%">
          <Image
            src={article.coverImage}
            alt={article.title}
            borderRadius="2xl"
            objectFit="cover"
          />
        </AspectRatio>
        <HStack spacing={1} position="absolute" bottom={2} left={2}>
          {article.tags.map((tag) => (
            <Tag
              key={tag}
              size="sm"
              fontSize={"xs"}
              fontWeight={600}
              variant="subtle"
              color={"text.blueGray"}
              bg={"lightGray"}
              borderRadius={"full"}
              colorScheme="blue"
            >
              {tag}
            </Tag>
          ))}
        </HStack>
      </Box>
      <VStack align="start" p={4} spacing={2} pb={8}>
        <HStack spacing={4} align="center">
          <DifficultyBadgeV2 level={article.difficulty} />
          <Text fontSize="sm" color="text.gray">
            {formatDate(article.date)}
          </Text>
          <Flex align="center">
            <TimeIcon mr={1} color="text.gray" fontSize="xs" />
            <Text fontSize="sm" color="text.gray">
              {article.readTime}
            </Text>
          </Flex>
        </HStack>
        <Text fontSize="lg" fontWeight={600}>
          {article.title}
        </Text>
      </VStack>
    </Box>
  );
};

export default ArticleCard;
