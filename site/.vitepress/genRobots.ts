import path from 'path';
import { writeFileSync } from 'fs';
import type { SiteConfig } from 'vitepress';

const baseUrl = process.env.SITE_HOSTNAME || 'https://wrensecurity.org';

export function genRobots(config: SiteConfig) {
  const robots = `User-agent: Googlebot
User-agent: Bingbot
User-agent: DuckDuckBot
User-agent: Applebot
User-agent: Yandex
User-agent: Baiduspider
User-agent: SeznamBot
Disallow: /*.md

User-agent: *
Allow: /

Sitemap: ${baseUrl}/sitemap.xml
`;
  writeFileSync(path.join(config.outDir, 'robots.txt'), robots);
}
