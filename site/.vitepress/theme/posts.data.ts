import { createContentLoader } from 'vitepress';

export interface Post {
  title: string,
  url: string,
  date: string,
  excerpt: string | undefined,
  author: string | undefined
}

declare const data: Post[];
export { data };

export default createContentLoader('blog/**/!(*index).md', {
  excerpt: true,
  transform(raw): Post[] {
    return raw
      .map(({ url, frontmatter }) => ({
        title: frontmatter.title,
        url,
        excerpt: frontmatter.excerpt,
        author: frontmatter.author,
        date: frontmatter.date
      }))
      .sort((a, b) => b.date - a.date);
  }
});
