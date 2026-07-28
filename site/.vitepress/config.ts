import { defineConfig } from 'vitepress';
import { genFeed } from './genFeed.js';

const SITE_HOSTNAME = process.env.SITE_HOSTNAME || 'https://wrensecurity.org';
const TWITTER_HANDLE = process.env.TWITTER_HANDLE || '@WrenSecurity';
const GITHUB_URL = process.env.GITHUB_URL || 'https://github.com/WrenSecurity';
const TWITTER_URL = process.env.TWITTER_URL || 'https://twitter.com/WrenSecurity';

export default defineConfig({
  base: '/',
  title: 'Wren Security',
  description: 'The Wren Security Suite.',
  sitemap: {
    hostname: SITE_HOSTNAME,
  },
  head: [
    ['meta', { name: 'viewport', content: 'width=device-width, initial-scale=1' } ],
    ['meta', { name: 'theme-color', content: '#c12233' } ],
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
    logo: '/navbar-logo.png',
    footer: {
      copyright: `Copyright © 2017-${new Date().getFullYear()} Wren Security`
    },
    nav: [
      {
        text: 'Home',
        link: '/'
      },
      {
        text: 'Projects',
        items: [
          { text: 'Wren:AM', link: '/projects/wrenam/' },
          { text: 'Wren:DS', link: '/projects/wrends/' },
          { text: 'Wren:ICF', link: '/projects/wrenicf/' },
          { text: 'Wren:IDM', link: '/projects/wrenidm/' },
          { text: 'Wren:IG', link: '/projects/wrenig/' },
        ]
      },
      {
        text: 'Blog',
        link: '/blog/'
      },
      {
        text: 'Guides',
        link: '/guide/'
      },
      {
        text: 'Community',
        items: [
          { text: 'Contact', link: '/community/contact' },
          { text: 'Get Involved', link: '/community/join' },
          { text: 'Disclosure Policy', link: '/community/disclosure' },
        ]
      },
      {
        text: 'Partners',
        link: '/partners'
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
  transformHead({ description, page, pageData, siteData }) {
    const image = pageData.frontmatter.image || '/wrensec-logo.png';
    const htmlPath = page.replace(/\.md$/, '.html');
    // The deployed site only serves clean (extensionless) URLs for index pages; other pages keep the .html extension.
    const cleanPath = htmlPath === 'index.html' ? '' : htmlPath.replace(/index\.html$/, '');
    const url = `${SITE_HOSTNAME}/${cleanPath}`;

    return [
      ['link', { rel: 'canonical', href: url }],
      ['meta', { property: 'og:type', content: 'website' }],
      ['meta', { property: 'og:url', content: url }],
      ['meta', { property: 'og:site_name', content: siteData.title }],
      ['meta', { property: 'og:title', content: pageData.title }],
      ['meta', { property: 'og:description', content: description }],
      ['meta', { property: 'og:image', content: `${SITE_HOSTNAME}${image}` }],
      ['meta', { name: 'twitter:card', content: 'summary_large_image' }],
      ['meta', { name: 'twitter:site', content: TWITTER_HANDLE }],
    ];
  },
  buildEnd: genFeed
});
