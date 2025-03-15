import { Post } from "@/interfaces/post";
import fs from "fs";
import matter from "gray-matter";
import { join } from "path";
import getConfig from "next/config";

const postsDirectory = join(process.cwd(), "_posts");
const { publicRuntimeConfig } = getConfig();

export function getBasePath(): string {
  return publicRuntimeConfig.basePath;
}

export function getPostSlugs() {
  return fs.readdirSync(postsDirectory);
}

export function getPostBySlug(slug: string) {
  const realSlug = slug.replace(/\.md$/, "");
  const fullPath = join(postsDirectory, `${realSlug}.md`);
  const fileContents = fs.readFileSync(fullPath, "utf8");
  let { data, content } = matter(fileContents);

  let dataString = JSON.stringify(data);
  dataString = dataString.replace(/\$\{basePath\}/gi, getBasePath());
  data = JSON.parse(dataString);
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
