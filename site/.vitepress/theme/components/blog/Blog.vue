<script setup lang="ts">
import { withBase } from 'vitepress';
import { data as posts } from '../../../data/posts.data';
</script>

<template>
  <article
    v-for="post of posts"
    :key="post.link"
  >
    <PostHeader
      :title="post.title"
      :author="post.author"
      :date="post.date"
      :link="post.link"
    />
    <section>
      <div v-html="post.excerpt" />
    </section>
    <div>
      <a :href="withBase(post.link)">Read more →</a>
    </div>
  </article>
</template>

<style scoped>
article + article {
  margin-top: 1.5rem;
  border-top: 1px solid #e0e0e0;
}
</style>