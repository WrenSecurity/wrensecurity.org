import { defineConfig } from 'vitepress';
import { genFeed } from './genFeed.js';

export default defineConfig({
  base: '/',
  title: 'Wren Security',
  description: 'The Wren Security Suite.',
  appearance: false,
  head: [
    ['meta', { name: 'viewport', content: 'width=device-width, initial-scale=1' } ],
    ['meta', { name: 'theme-color', content: '#7c1c39' } ],
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
