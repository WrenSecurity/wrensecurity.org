<script setup lang="ts">
import { withBase, useData } from 'vitepress';
const { frontmatter } = useData();
</script>

<template>
  <article>
    <PostHeader
      :title="frontmatter.title"
      :author="frontmatter.author"
      :date="frontmatter.date"
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