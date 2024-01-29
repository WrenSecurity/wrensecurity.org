import { App } from 'vue';
import DefaultTheme from 'vitepress/theme';
// Custom components
import Sponsor from './components/Sponsor.vue';
import Blog from './components/blog/Blog.vue';
import PostList from './components/common/PostList.vue';
import Post from './components/common/Post.vue';
import PostHeader from './components/common/PostHeader.vue';
import Guide from './components/guide/Guide.vue';
// Custom styles
import './custom.css';

export default {
  ...DefaultTheme,
  enhanceApp({ app }: { app: App }) {
    app.component('Sponsor', Sponsor);
    app.component('PostList', PostList);
    app.component('Blog', Blog);
    app.component('Post', Post);
    app.component('PostHeader', PostHeader);
    app.component('Guide', Guide);
  }
};
