<script setup lang="ts">
import { withBase, useData, useRoute } from 'vitepress';
const { frontmatter } = useData();

const path = useRoute().path;
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
      <a
        v-if="path.startsWith('/guide')"
        :href="withBase('/guide/')"
      >← Back to guides</a>
      <a
        v-if="path.startsWith('/blog')"
        :href="withBase('/blog/')"
      >← Back to the blog</a>
    </div>
  </article>
</template>

<style scoped>
section {
  margin-bottom: 20px;
}
</style>