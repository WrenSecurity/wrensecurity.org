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
    logo: '/wren.png',
    footer: {
      copyright: 'Copyright © 2017-2023 Wren Security'
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
          { text: 'Wren:ICF', link: '/projects/wrenicf/' },
        ]
      },
      {
        text: 'Blog',
        link: '/blog/'
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
        text: 'Sponsors',
        link: '/sponsors'
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
      { icon: { svg: '<svg fill="#000000" viewBox="0 0 1200 1227" role="img"><path d="M714.163 519.284L1160.89 0H1055.03L667.137 450.887L357.328 0H0L468.492 681.821L0 1226.37H105.866L515.491 750.218L842.672 1226.37H1200L714.137 519.284H714.163ZM569.165 687.828L521.697 619.934L144.011 79.6944H306.615L611.412 515.685L658.88 583.579L1055.08 1150.3H892.476L569.165 687.854V687.828Z"/></svg>' }, link: 'https://twitter.com/WrenSecurity' },
      { icon: { svg: '<svg fill="#000000" viewBox="0 0 24 24" role="img"><path d="M8.501 4.001H10.5V24H8.501V4.001zm6.999 0V24h-2V4.001h2zM3.5 0h2.001v15H3.5V0zm15 4.001h2V15h-2V4.001z"/></svg>' }, link: 'https://gitter.im/WrenSecurity/Lobby' },
    ],
  },
  ignoreDeadLinks: true,
  buildEnd: genFeed
});
