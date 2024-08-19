import { DifficultyLevel } from "./difficulty";

export type GlossaryItem = {
  slug: string;
  title: string;
  description: string;
  content: string;
  difficulty: DifficultyLevel;
  tags: string[];
};
