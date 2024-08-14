export interface Article {
  id: number;
  title: string;
  image: string;
  tags: string[];
  level: "Beginner" | "Intermediate" | "Advanced";
  date: string;
  readTime: string;
}
