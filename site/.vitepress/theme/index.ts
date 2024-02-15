import { App } from 'vue';
import DefaultTheme from 'vitepress/theme';
// Custom components
import Partners from './components/partner/Partners.vue';
import Blog from './components/blog/Blog.vue';
import PostList from './components/common/PostList.vue';
import Post from './components/common/Post.vue';
import PostHeader from './components/common/PostHeader.vue';
import Guide from './components/guide/Guide.vue';
import FeatureList from './components/index/FeatureList.vue';
import FeatureListItem from './components/index/FeatureListItem.vue';
import HorizontalList from './components/index/HorizontalList.vue';
import HorizontalListItem from './components/index/HorizontalListItem.vue';
import Section from './components/index/Section.vue';
// Custom styles
import './custom.css';

export default {
  ...DefaultTheme,
  enhanceApp({ app }: { app: App }) {
    app.component('Partners', Partners);
    app.component('PostList', PostList);
    app.component('Blog', Blog);
    app.component('Post', Post);
    app.component('PostHeader', PostHeader);
    app.component('Guide', Guide);
    app.component('FeatureList', FeatureList);
    app.component('FeatureListItem', FeatureListItem);
    app.component('HorizontalList', HorizontalList);
    app.component('HorizontalListItem', HorizontalListItem);
    app.component('Section', Section);
  }
};
