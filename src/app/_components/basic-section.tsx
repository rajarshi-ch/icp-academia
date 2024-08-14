'use client';
import React from "react";
import {
  Box,
  SimpleGrid,
  Text,
} from "@chakra-ui/react";
import { Article } from "@/interfaces/article";
import ArticleCard from "./cards/article-card";
import GlossaryCard from "./cards/glossary-card";
import { GlossaryItem } from "@/interfaces/glossary";

// Mock data for posts
const articles: Article[] = [
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
  {
    id: 4,
    title: "Understanding JavaScript Closures",
    image:
      "https://images.unsplash.com/photo-1605792657660-596af9009e82?q=80&w=3202&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    tags: ["JavaScript", "Programming"],
    level: "Intermediate",
    date: "2023-06-20",
    readTime: "7 min",
  },
  {
    id: 5,
    title: "Mastering Flexbox in CSS",
    image:
      "https://images.unsplash.com/photo-1605792657660-596af9009e82?q=80&w=3202&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    tags: ["CSS", "Web Design"],
    level: "Advanced",
    date: "2023-06-15",
    readTime: "9 min",
  },
];

interface BasicSectionProps {
  glossaryTerm: GlossaryItem;
}

const BasicSection: React.FC<BasicSectionProps> = ({ glossaryTerm }) => {


  return (
    <Box py={12}>
      <Text
        fontWeight={900}
        fontSize={"4xl"}
        lineHeight={"110%"}
        color={"black"}
        mb={4}
        textAlign={"center"}
      >
        Basics
      </Text>
      <Text fontSize={"lg"} mb={10} color="text.gray" textAlign={"center"}>
        All the basics to get you started on the ICP terminology and concepts.
      </Text>
      <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={10}>
        {articles.map((article) => (
          <ArticleCard key={article.id} article={article} />
        ))}
        <GlossaryCard glossaryTerm={glossaryTerm} />
      </SimpleGrid>
    </Box>
  );
};

export default BasicSection;
