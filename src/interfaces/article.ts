import { Author } from "./author";
import { OgImage } from "./ogImage";

export interface IArticleCard {
  id: number;
  title: string;
  image: string;
  tags: string[];
  level: "Beginner" | "Intermediate" | "Advanced";
  date: string;
  readTime: string;
}

export interface IArticle {
  slug: string;
  title: string;
  excerpt: string;
  coverImage: string;
  date: string;
  author: Author;
  ogImage: OgImage;
  difficulty: string;
  tags: string[];
  readTime: string;
  content: string;
}