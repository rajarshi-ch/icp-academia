import React from "react";
import {
  Box,
  Heading,
  Image,
  Text,
  Tag,
  HStack,
  VStack,
  Flex,
  Badge,
  AspectRatio,
} from "@chakra-ui/react";
import { CalendarIcon, TimeIcon } from "@chakra-ui/icons";
import { Article } from "@/interfaces/article";
import DifficultyBadge from "../difficulty-badge";
import { formatDate } from "@/lib/utils";

// Define types

interface ArticleCardProps {
  article: Article;
}

const ArticleCard: React.FC<ArticleCardProps> = ({ article }) => {
  return (
    <Box borderWidth="1px" borderRadius="2xl" overflow="hidden" boxShadow="sm"
    _hover={{
        boxShadow: "md",
        transform: "translateY(-2px)",
      }}>
      <Box position="relative">
        <AspectRatio ratio={1.8} width="100%">
          <Image
            src={"/assets/images/bc_2.jpg"}
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
          <DifficultyBadge level={article.level} />
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
