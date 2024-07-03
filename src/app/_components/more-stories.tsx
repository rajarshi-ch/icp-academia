"use client";

import React from "react";
import {
  Box,
  Heading,
  SimpleGrid,
  Image,
  Text,
  Tag,
  HStack,
  VStack,
  Flex,
  Badge,
} from "@chakra-ui/react";
import { CalendarIcon, TimeIcon } from "@chakra-ui/icons";

// Define types
interface Post {
  id: number;
  title: string;
  image: string;
  tags: string[];
  level: "Beginner" | "Intermediate" | "Advanced";
  date: string;
  readTime: string;
}

// Mock data for posts
const posts: Post[] = [
  {
    id: 1,
    title: "Introduction to React Hooks",
    image:
      "https://images.unsplash.com/photo-1605792657660-596af9009e82?q=80&w=3202&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    tags: ["React", "JavaScript"],
    level: "Beginner",
    date: "2023-07-01",
    readTime: "5 min",
  },
  {
    id: 2,
    title: "Advanced TypeScript Techniques",
    image:
      "https://images.unsplash.com/photo-1605792657660-596af9009e82?q=80&w=3202&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    tags: ["TypeScript", "Programming"],
    level: "Advanced",
    date: "2023-06-28",
    readTime: "8 min",
  },
  {
    id: 3,
    title: "CSS Grid Layout Mastery",
    image:
      "https://images.unsplash.com/photo-1605792657660-596af9009e82?q=80&w=3202&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    tags: ["CSS", "Web Design"],
    level: "Intermediate",
    date: "2023-06-25",
    readTime: "6 min",
  },
  // Add more posts as needed
];

interface PostCardProps {
  post: Post;
}

const PostCard: React.FC<PostCardProps> = ({ post }) => {
  const levelColor: Record<Post["level"], string> = {
    Beginner: "green",
    Intermediate: "orange",
    Advanced: "red",
  };

  return (
    <Box borderWidth="1px" borderRadius="lg" overflow="hidden">
      <Box position="relative">
        <Image src={post.image} alt={post.title} />
        <HStack spacing={1} position="absolute" top={2} right={2}>
          {post.tags.map((tag) => (
            <Tag key={tag} size="sm" variant="solid" colorScheme="blue">
              {tag}
            </Tag>
          ))}
        </HStack>
      </Box>
      <VStack align="start" p={4} spacing={2}>
        <Badge colorScheme={levelColor[post.level]}>{post.level}</Badge>
        <Heading as="h3" size="md">
          {post.title}
        </Heading>
        <HStack spacing={4}>
          <Flex align="center">
            <CalendarIcon mr={1} />
            <Text fontSize="sm">{post.date}</Text>
          </Flex>
          <Flex align="center">
            <TimeIcon mr={1} />
            <Text fontSize="sm">{post.readTime} read</Text>
          </Flex>
        </HStack>
      </VStack>
    </Box>
  );
};

const MoreStories: React.FC = () => {
  return (
    <Box py={12}>
      <Heading as="h2" size="xl" mb={6} textAlign="center">
        More Stories
      </Heading>
      <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={10}>
        {posts.map((post) => (
          <PostCard key={post.id} post={post} />
        ))}
      </SimpleGrid>
    </Box>
  );
};

export default MoreStories;
