<script setup lang="ts">
import { data as posts } from '../../blog.data';
</script>

<template>
  <PostList
    :posts="posts"
  />
</template>
