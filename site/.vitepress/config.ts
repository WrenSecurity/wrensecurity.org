import { defineConfig } from 'vitepress';

export default defineConfig({
  base: '/',
  title: 'Wren Security',
  description: 'The Wren Security Suite.',
  head: [
    ['meta', { name: 'viewport', content: 'width=device-width, initial-scale=1' } ],
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
          ]
        }
      ],
    },
    socialLinks: [
      { icon: 'github', link: 'https://github.com/WrenSecurity' },
    ],
  },
});
