//~ Custom Markdown plugins
import MarkdownItInclude from 'markdown-it-include'

module.exports = {
  base: '/wrensec-website/',
  title: 'Wren Security',
  description: 'The Wren Security Suite.',
  themeConfig: {
    logo: '/wren.png',
    nav: [
      { text: "Home", link: "/" },
      {
        text: "Projects",
        items: [
          { text: "Wren:IDM", link: "/projects/wrenidm" },
          { text: "Wren:AM", link: "/projects/wrenam" },
          { text: "Wren:DS", link: "/projects/wrends" },
          { text: "Wren:ICF", link: "/projects/wrenicf" },
        ]
      },
      {
        text: "Releases",
        items: [
          { text: "Wren:IDM", link: "/releases/wrenidm" },
        ]
      },
      { text: "Blog", link: "/blog/" },
      { text: "Community", link: "/community" },
      { text: "Sponsors", link: "/sponsors" },
      { text: "Contact", link: "/contact" },
    ],
    sidebar: {
      "/projects/": [
        { text: "Wren:IDM", link: "/projects/wrenidm" },
        { text: "Wren:AM", link: "/projects/wrenam" },
        { text: "Wren:DS", link: "/projects/wrends" },
        { text: "Wren:ICF", link: "/projects/wrenicf" },
      ],
      "/releases/": [
        { text: "Wren:IDM", link: "/releases/wrenidm" }
      ],
    },
  },
  markdown: {
    config: md => md.use(MarkdownItInclude)
  }
}