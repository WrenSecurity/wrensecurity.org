<script setup>
import { withBase } from 'vitepress'
</script>

<template>
  <article>
    <PostHeader
      :title="$frontmatter.title"
      :author="$frontmatter.author"
      :date="$frontmatter.date"
    />
    <section>
      <slot />
    </section>
    <div>
      <a :href="withBase('/blog/')">← Back to the blog</a>
    </div>
  </article>
</template>

<style scoped>
section {
  margin-bottom: 20px;
}
</style>