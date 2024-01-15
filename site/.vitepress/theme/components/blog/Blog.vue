<script setup lang="ts">
import { withBase } from 'vitepress';
import { data as posts } from '../../posts.data';
</script>

<template>
  <article
    v-for="post of posts"
    :key="post.url"
  >
    <PostHeader
      :title="post.title"
      :author="post.author"
      :date="post.date"
      :url="post.url"
    />
    <section>
      <p v-html="post.excerpt" />
    </section>
    <div>
      <a :href="withBase(post.url)">Read more →</a>
    </div>
  </article>
</template>

<style scoped>
article + article {
  margin-top: 1.5rem;
  border-top: 1px solid var(--vp-c-divider);
}
</style>