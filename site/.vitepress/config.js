import { defineConfig } from 'vitepress'

export default defineConfig({
  base: '/wrensec-website/',
  title: 'Wren Security',
  description: 'The Wren Security Suite.',
  themeConfig: {
    logo: '/wren.png',
    head: [
      ["meta", { name: "viewport", content: "width=device-width, initial-scale=1" } ],
    ],
    nav: [
      {
        text: "Home",
        link: "/" },
      {
        text: "Projects",
        items: [
          { text: "Wren:IDM", link: "/projects/wrenidm/" },
          { text: "Wren:AM", link: "/projects/wrenam/" },
          { text: "Wren:DS", link: "/projects/wrends/" },
          { text: "Wren:ICF", link: "/projects/wrenicf/" },
        ]
      },
      {
        text: "Blog",
        link: "/blog/"
      },
      {
        text: "Community",
        items: [
          { text: "Contact", link: "/community/contact" },
          { text: "Get Involved", link: "/community/join" },
        ]
      },
      {
        text: "Sponsors", link: "/sponsors"
      },
    ],
    sidebar: {
      "/projects/wrenidm": [
        {
          text: "Wren:IDM",
          children: [
            { text: "Overview", link: "/projects/wrenidm/" },
            { text: "Getting Started", link: "/projects/wrenidm/download" },
            { text: "Resources", link: "/projects/wrenidm/resources" },
          ]
        },
      ],
      "/projects/wrenam": [
        {
          text: "Wren:AM",
          children: [
            { text: "Overview", link: "/projects/wrenam/" },
          ]
        },
      ],
      "/projects/wrends": [
        {
          text: "Wren:DS",
          children: [
            { text: "Overview", link: "/projects/wrends/" },
          ]
        },
      ],
      "/projects/wrenicf": [
        {
          text: "Wren:ICF",
          children: [
            { text: "Overview", link: "/projects/wrenicf/" },
          ]
        },
      ],
      "/community/": [
        { text: "Contact", link: "/community/contact" },
        { text: "Get Involved", link: "/community/join" },
      ],
    },
  },
})
