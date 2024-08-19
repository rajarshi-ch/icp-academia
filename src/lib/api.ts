import { IArticle } from "@/interfaces/article";
import { GlossaryItem } from "@/interfaces/glossary";
import fs from "fs";
import matter from "gray-matter";
import { join } from "path";

const articlesDirectory = join(process.cwd(), "_articles");
const glossaryDirectory = join(process.cwd(), "_glossary");

export function getArticleSlugs() {
  return fs.readdirSync(articlesDirectory);
}

export function getArticleBySlug(slug: string) {
  const realSlug = slug.replace(/\.md$/, "");
  const fullPath = join(articlesDirectory, `${realSlug}.md`);
  const fileContents = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(fileContents);

  return { ...data, slug: realSlug, content } as IArticle;
}

export function getAllArticles(): IArticle[] {
  const slugs = getArticleSlugs();
  const articles = slugs
    .map((slug) => getArticleBySlug(slug))
    // sort posts by date in descending order
    .sort((post1, post2) => (post1.date > post2.date ? -1 : 1));
  return articles;
}

export function getGlossarySlugs() {
  return fs.readdirSync(glossaryDirectory);
}

export function getGlossaryItemBySlug(slug: string) {
  const realSlug = slug.replace(/\.md$/, "");
  const fullPath = join(glossaryDirectory, `${realSlug}.md`);
  const fileContents = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(fileContents);

  return { ...data, slug: realSlug, content } as GlossaryItem;
}

export function getAllGlossaryItems(): GlossaryItem[] {
  const slugs = getGlossarySlugs();
  const glossary = slugs
    .map((slug) => getGlossaryItemBySlug(slug))
    // sort posts by date in descending order
    .sort((post1, post2) => (post1.title > post2.title ? -1 : 1));
  return glossary;
}

export function getRandomGlossaryItem(): GlossaryItem {
  const slugs = getGlossarySlugs();
  const randomIndex = Math.floor(Math.random() * slugs.length);
  return getGlossaryItemBySlug(slugs[randomIndex]);
}
