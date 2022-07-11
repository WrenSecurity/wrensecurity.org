import fs from 'fs'
import path from 'path'
import glob from 'glob'
import matter from 'gray-matter'
import { createMarkdownRenderer } from 'vitepress'

const cache = new Map()

/**
 * Create blog post for the specified markdown file.
 * @param {String} filePath Absolute file path of post markdown file.
 * @returns Created post object.
 */
function createPost(filePath) {
  const baseDir = path.resolve(__dirname, '../../')
  const modifyTimestamp = fs.statSync(filePath).mtimeMs
  // Check whether the post has been changed
  const cached = cache.get(filePath)
  if (cached && cached.modifyTimestamp === modifyTimestamp) {
    return cached.post
  }
  // Process post content
  const content = fs.readFileSync(filePath, 'utf-8')
  const { data } = matter(content)
  const post = {
    title: data.title,
    link: `${path.relative(baseDir, filePath).replace(/\.md$/, '.html')}`,
    date: data.date,
    author: data.author,
    excerpt: data.excerpt
  }
  cache.set(filePath, { modifyTimestamp, post })
  return post
}

module.exports = {
  watch: '../../blog/**/*.md',
  async load() {
    const posts = path.resolve(__dirname, '../../blog/**/*.md')
    const md = await createMarkdownRenderer(process.cwd())
    return glob.
        sync(posts, { 'ignore': '**/index.md' }).
        map(file => createPost(file)).
        map(post => {
          post.excerpt = md.render(post.excerpt);
          return post
        }).
        sort((a, b) => b.date.getTime() - a.date.getTime())
  }
}
