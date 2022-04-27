import Theme from 'vitepress/theme'
// Custom components
import SponsorItem from './components/SponsorItem.vue'
// Custom styles
import './custom.css'

export default {
  ...Theme,

  enhanceApp({ app }) {
    app.component('sponsorItem', SponsorItem)
  }
}