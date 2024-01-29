import { createContentLoader } from 'vitepress';
import type { Post } from './types/post';

declare const data: Post[];
export { data };

export default createContentLoader('guide/**/!(index).md', {
  excerpt: true,
  transform(raw): Post[] {
    return raw
      .map(({ url, frontmatter }) => ({
        title: frontmatter.title,
        url,
        excerpt: frontmatter.excerpt,
        author: frontmatter.author,
        date: frontmatter.date,
        project: frontmatter.project
      }))
      .sort((a, b) => b.date - a.date);
  }
});
