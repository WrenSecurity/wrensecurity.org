import Theme from 'vitepress/theme'
// Custom components
import ProjectLogo from '../components/ProjectLogo.vue'
// Custom styles
import './custom.css'

export default {
  ...Theme,

  enhanceApp({ app }) {
    app.component('project-logo', ProjectLogo)
  }
}