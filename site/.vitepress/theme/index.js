import DefaultTheme from 'vitepress/theme'
// Custom components
import Sponsor from './components/Sponsor.vue'
import Blog from './components/blog/Blog.vue'
import Post from './components/blog/Post.vue'
import PostHeader from './components/blog/PostHeader.vue'
// Custom styles
import './custom.css'

export default {
  ...DefaultTheme,
  enhanceApp({ app }) {
    app.component('Sponsor', Sponsor)
    app.component('Blog', Blog)
    app.component('Post', Post)
    app.component('PostHeader', PostHeader)
  }
}