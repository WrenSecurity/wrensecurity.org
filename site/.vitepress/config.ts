import { defineConfig } from 'vitepress';
import { genFeed } from './genFeed.js';

export default defineConfig({
  base: '/',
  title: 'Wren Security',
  description: 'The Wren Security Suite.',
  head: [
    ['meta', { name: 'viewport', content: 'width=device-width, initial-scale=1' } ],
    ['meta', { name: 'theme-color', content: '#c12233' } ],
    [
      'script', {
        src: 'https://cdn.usefathom.com/script.js',
        'data-site': 'ASVYZNXZ',
        defer: '',
      }
    ]
  ],
  themeConfig: {
    logo: '/navbar-logo.png',
    footer: {
      copyright: 'Copyright © 2017-2024 Wren Security'
    },
    nav: [
      {
        text: 'Home',
        link: '/'
      },
      {
        text: 'Projects',
        items: [
          { text: 'Wren:IDM', link: '/projects/wrenidm/' },
          { text: 'Wren:AM', link: '/projects/wrenam/' },
          { text: 'Wren:DS', link: '/projects/wrends/' },
          { text: 'Wren:IG', link: '/projects/wrenig/' },
          { text: 'Wren:ICF', link: '/projects/wrenicf/' },
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
      '/projects/wrenicf': [
        {
          text: 'Wren:ICF',
          items: [
            { text: 'Overview', link: '/projects/wrenicf/' },
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
      { icon: 'github', link: 'https://github.com/WrenSecurity' },
      { icon: 'x', link: 'https://twitter.com/WrenSecurity' },
      { icon: { svg: '<svg fill="#000000" viewBox="0 0 24 24" role="img"><path d="M8.501 4.001H10.5V24H8.501V4.001zm6.999 0V24h-2V4.001h2zM3.5 0h2.001v15H3.5V0zm15 4.001h2V15h-2V4.001z"/></svg>' }, link: 'https://gitter.im/WrenSecurity/Lobby' },
    ],
  },
  ignoreDeadLinks: [
    // Ignore all localhost links
    /^https?:\/\/localhost/,
  ],
  buildEnd: genFeed
});
