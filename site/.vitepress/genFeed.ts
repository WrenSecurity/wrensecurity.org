import path from 'path';
import { writeFileSync } from 'fs';
import { Feed } from 'feed';
import { createContentLoader, type SiteConfig } from 'vitepress';

const baseUrl = `https://wrensecurity.org`;

export async function genFeed(config: SiteConfig) {
  const feed = new Feed({
    title: 'Wren Security',
    description: 'The official blog for Wren Security projects',
    id: baseUrl,
    link: baseUrl,
    language: 'en',
    image: 'https://wrensecurity.org/wrensec-logo.png',
    favicon: `${baseUrl}/favicon.ico`,
    copyright:
      'Copyright © 2017-present Wren Security'
  });

  const posts = await createContentLoader('(blog|guide)/**/!(index).md', {
    excerpt: true,
    render: true
  }).load();

  posts.sort(
    (a, b) =>
      +new Date(b.frontmatter.date as string) -
      +new Date(a.frontmatter.date as string)
  );

  for (const { url, frontmatter, html } of posts) {
    feed.addItem({
      title: frontmatter.title,
      id: `${baseUrl}${url}`,
      link: `${baseUrl}${url}`,
      description: frontmatter.excerpt,
      content: html?.replaceAll('&ZeroWidthSpace;', ''),
      author: [
        {
          name: 'Wren Security',
          link: 'https://wrensecurity.org'
        }
      ],
      date: frontmatter.date
    });
  }

  writeFileSync(path.join(config.outDir, 'feed.rss'), feed.rss2());
}
