import { defineConfig, type HeadConfig } from 'vitepress';
import { genFeed } from './genFeed.js';
import { genRobots } from './genRobots.js';
import llmstxt from 'vitepress-plugin-llms';

const SITE_HOSTNAME = process.env.SITE_HOSTNAME || 'https://wrensecurity.org';
const TWITTER_HANDLE = process.env.TWITTER_HANDLE || '@WrenSecurity';
const GITHUB_URL = process.env.GITHUB_URL || 'https://github.com/WrenSecurity';
const TWITTER_URL = process.env.TWITTER_URL || 'https://twitter.com/WrenSecurity';

export default defineConfig({
  base: '/',
  title: 'Wren Security',
  description: 'The Wren Security Suite.',
  appearance: false,
  sitemap: {
    hostname: SITE_HOSTNAME,
  },
  head: [
    ['meta', { name: 'viewport', content: 'width=device-width, initial-scale=1' } ],
    ['meta', { name: 'theme-color', content: '#7c1c39' } ],
    ['link', { rel: 'alternate', type: 'application/rss+xml', title: 'Wren Security Blog', href: '/feed.rss' }],
    [
      'script', {
        src: 'https://cdn.usefathom.com/script.js',
        'data-site': 'ASVYZNXZ',
        'data-spa': 'auto',
        defer: '',
      }
    ]
  ],
  themeConfig: {
    logo: '/navbar-logo.svg',
    siteTitle: false,
    footer: {
      message: 'Though Wren Security suite originated with open-source code that ForgeRock™ had previously released, we are not affiliated with ForgeRock™ in any way. Our projects are based on the very latest code from what was available under a CDDL license (OpenAM 13.5+, OpenDJ 3.5+, OpenIDM 4.5+, and OpenIG 4.0+).',
      copyright: `Copyright © 2017-${new Date().getFullYear()} Wren Security`
    },
    nav: [
      {
        text: 'Home',
        link: '/'
      },
      {
        text: 'Projects',
        activeMatch: '^/projects/',
        items: [
          { text: 'Wren:AM', link: '/projects/wrenam/', activeMatch: '^/projects/wrenam/' },
          { text: 'Wren:DS', link: '/projects/wrends/', activeMatch: '^/projects/wrends/' },
          { text: 'Wren:ICF', link: '/projects/wrenicf/', activeMatch: '^/projects/wrenicf/' },
          { text: 'Wren:IDM', link: '/projects/wrenidm/', activeMatch: '^/projects/wrenidm/' },
          { text: 'Wren:IG', link: '/projects/wrenig/', activeMatch: '^/projects/wrenig/' },
        ]
      },
      {
        text: 'Blog',
        link: '/blog/',
        activeMatch: '^/blog/'
      },
      {
        text: 'Guides',
        link: '/guide/',
        activeMatch: '^/guide/'
      },
      {
        text: 'Community',
        activeMatch: '^/community/',
        items: [
          { text: 'Contact', link: '/community/contact' },
          { text: 'Get Involved', link: '/community/join' },
          { text: 'Disclosure Policy', link: '/community/disclosure' },
        ]
      },
      {
        text: 'Partners',
        link: '/partners/',
        activeMatch: '^/partners/'
      },
      {
        component: 'NavPartnerButton'
      },
    ],
    sidebar: {
      '/projects/wrenam': [
        {
          text: 'Wren:AM',
          items: [
            { text: 'Overview', link: '/projects/wrenam/' },
            { text: 'Getting Started', link: '/projects/wrenam/download' },
            { text: 'Resources', link: '/projects/wrenam/resources' },
          ]
        },
      ],
      '/projects/wrends': [
        {
          text: 'Wren:DS',
          items: [
            { text: 'Overview', link: '/projects/wrends/' },
            { text: 'Getting Started', link: '/projects/wrends/download' },
            { text: 'Resources', link: '/projects/wrends/resources' },
          ]
        },
      ],
      '/projects/wrenicf': [
        {
          text: 'Wren:ICF',
          items: [
            { text: 'Overview', link: '/projects/wrenicf/' },
          ]
        },
      ],
      '/projects/wrenidm': [
        {
          text: 'Wren:IDM',
          items: [
            { text: 'Overview', link: '/projects/wrenidm/' },
            { text: 'Getting Started', link: '/projects/wrenidm/download' },
            { text: 'Resources', link: '/projects/wrenidm/resources' },
          ]
        },
      ],
      '/projects/wrenig': [
        {
          text: 'Wren:IG',
          items: [
            { text: 'Overview', link: '/projects/wrenig/' },
            { text: 'Getting Started', link: '/projects/wrenig/download' },
            { text: 'Resources', link: '/projects/wrenig/resources' },
          ]
        },
      ],
      '/community/': [
        {
          text: 'Community',
          items: [
            { text: 'Contact', link: '/community/contact' },
            { text: 'Get Involved', link: '/community/join' },
            { text: 'Disclosure Policy', link: '/community/disclosure' },
          ]
        }
      ],
      '/partners': [
        {
          text: 'Partners',
          items: [
            { text: 'Partner Network', link: '/partners/' },
            { text: 'Talk to a Partner', link: '/partners/talk-to-a-partner' },
            { text: 'Become a Partner', link: '/partners/become-a-partner' },
          ]
        }
      ],
    },
    socialLinks: [
      { icon: 'github', link: GITHUB_URL },
      { icon: 'x', link: TWITTER_URL },
      { icon: { svg: '<svg fill="#000000" viewBox="0 0 24 24" role="img"><path d="M8.501 4.001H10.5V24H8.501V4.001zm6.999 0V24h-2V4.001h2zM3.5 0h2.001v15H3.5V0zm15 4.001h2V15h-2V4.001z"/></svg>' }, link: 'https://gitter.im/WrenSecurity/Lobby' },
    ],
  },
  ignoreDeadLinks: [
    // Ignore all localhost links
    /^https?:\/\/localhost/,
  ],
  transformPageData(pageData) {
    // Blog posts carry a summary in `excerpt`. Use it when the page has no explicit description.
    const { description, excerpt } = pageData.frontmatter;
    if (!description && typeof excerpt === 'string') {
      pageData.description = excerpt.replace(/\s+/g, ' ').trim();
    }
  },
  transformHead({ description, page, pageData, siteData }) {
    if (page === '404.md') {
      return [['meta', { name: 'robots', content: 'noindex' }]];
    }

    const htmlPath = page.replace(/\.md$/, '.html');
    // The deployed site only serves clean (extensionless) URLs for index pages. Other pages keep the .html extension.
    const cleanPath = htmlPath === 'index.html' ? '' : htmlPath.replace(/index\.html$/, '');
    const url = `${SITE_HOSTNAME}/${cleanPath}`;
    // Pages with a date (blog posts, guides) are articles.
    const date = pageData.frontmatter.date;
    const isArticle = Boolean(date);

    const head: HeadConfig[] = [
      ['link', { rel: 'canonical', href: url }],
      ['meta', { property: 'og:type', content: isArticle ? 'article' : 'website' }],
      ['meta', { property: 'og:url', content: url }],
      ['meta', { property: 'og:site_name', content: siteData.title }],
      ['meta', { property: 'og:title', content: pageData.title }],
      ['meta', { property: 'og:description', content: description }],
      ['meta', { property: 'og:image', content: `${SITE_HOSTNAME}/social/og-image.png` }],
      ['meta', { property: 'og:image:width', content: '1200' }],
      ['meta', { property: 'og:image:height', content: '630' }],
      ['meta', { name: 'twitter:card', content: 'summary_large_image' }],
      ['meta', { name: 'twitter:site', content: TWITTER_HANDLE }],
    ];

    if (isArticle) {
      // Frontmatter dates have no time part, so publish just the date (YYYY-MM-DD).
      const publishedTime = new Date(date).toISOString().slice(0, 10);
      head.push(['meta', { property: 'article:published_time', content: publishedTime }]);
    }

    if (page === 'index.md') {
      // Structured data that lets search engines show the organization's logo and link its profiles.
      const organization = {
        '@context': 'https://schema.org',
        '@type': 'Organization',
        name: siteData.title,
        url: SITE_HOSTNAME,
        logo: `${SITE_HOSTNAME}/wrensec-logo.png`,
        sameAs: [GITHUB_URL, TWITTER_URL],
      };
      head.push(['script', { type: 'application/ld+json' }, JSON.stringify(organization)]);
    }

    return head;
  },
  async buildEnd(config) {
    await genFeed(config);
    genRobots(config);
  },
  vite: {
    plugins: [llmstxt({
      domain: SITE_HOSTNAME,
      excludeIndexPage: false,
      excludeBlog: false,
      // The homepage hero is a two-part headline. The llms.txt header needs the site name and a one-line summary instead.
      customTemplateVariables: {
        title: 'Wren Security',
        description: 'An open-source, enterprise-ready IAM platform designed for long-term reliability. Modular, secure by design, and built on open standards.',
      },
    })],
  }
});
