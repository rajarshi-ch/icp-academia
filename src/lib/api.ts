import { GlossaryItem } from "@/interfaces/glossary";
import { Post } from "@/interfaces/post";
import fs from "fs";
import matter from "gray-matter";
import { join } from "path";

const postsDirectory = join(process.cwd(), "_posts");
const glossaryDirectory = join(process.cwd(), "_glossary");

export function getPostSlugs() {
  return fs.readdirSync(postsDirectory);
}

export function getPostBySlug(slug: string) {
  const realSlug = slug.replace(/\.md$/, "");
  const fullPath = join(postsDirectory, `${realSlug}.md`);
  const fileContents = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(fileContents);

  return { ...data, slug: realSlug, content } as Post;
}

export function getAllPosts(): Post[] {
  const slugs = getPostSlugs();
  const posts = slugs
    .map((slug) => getPostBySlug(slug))
    // sort posts by date in descending order
    .sort((post1, post2) => (post1.date > post2.date ? -1 : 1));
  return posts;
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
