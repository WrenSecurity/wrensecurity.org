<script setup lang="ts">
import { data as posts } from '../../guide.data';
</script>

<template>
  <PostList
    :posts="posts"
  />
</template>
