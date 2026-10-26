import { App } from 'vue';
import DefaultTheme from 'vitepress/theme';
import Layout from './Layout.vue';
// Custom components
import Partners from './components/partner/Partners.vue';
import PartnerCard from './components/partner/PartnerCard.vue';
import Blog from './components/blog/Blog.vue';
import PostList from './components/common/PostList.vue';
import Post from './components/common/Post.vue';
import PostHeader from './components/common/PostHeader.vue';
import Guide from './components/guide/Guide.vue';
import ActionBanner from './components/common/ActionBanner.vue';
import CardGrid from './components/common/CardGrid.vue';
import FeatureCard from './components/common/FeatureCard.vue';
import Timeline from './components/common/Timeline.vue';
import TimelineItem from './components/common/TimelineItem.vue';
import PipedriveForm from './components/common/PipedriveForm.vue';
import NavPartnerButton from './components/partner/NavPartnerButton.vue';
// Custom styles
import './custom.css';

export default {
  ...DefaultTheme,
  Layout,
  enhanceApp({ app }: { app: App }) {
    app.component('Partners', Partners);
    app.component('PartnerCard', PartnerCard);
    app.component('PostList', PostList);
    app.component('Blog', Blog);
    app.component('Post', Post);
    app.component('PostHeader', PostHeader);
    app.component('Guide', Guide);
    app.component('ActionBanner', ActionBanner);
    app.component('CardGrid', CardGrid);
    app.component('FeatureCard', FeatureCard);
    app.component('Timeline', Timeline);
    app.component('TimelineItem', TimelineItem);
    app.component('PipedriveForm', PipedriveForm);
    app.component('NavPartnerButton', NavPartnerButton);
  }
};
