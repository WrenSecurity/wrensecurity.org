<script setup lang="ts">
import { withBase } from 'vitepress';

defineProps({
  title: { type: String, required: true },
  author: { type: String, required: false, default: null },
  date: { type: String, required: true },
  url: { type: String, required: false, default: null },
});

function formatDate(date: string) {
  let parsed = new Date(date);
  return parsed.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });
}
</script>

<template>
  <h1>
    <a
      v-if="url"
      :href="withBase(url)"
    >{{ title }}</a>
    <span v-else>{{ title }}</span>
  </h1>
  <header>
    <div v-if="author">
      {{ author }}
    </div>
    <div>{{ formatDate(date) }}</div>
  </header>
</template>

<style scoped>
h1 {
  margin-top: 1.5rem;
  margin-bottom: 5px;
}

header div {
  display: inline-block;
  color: #6b7280;
}

header div:not(:last-child)::after {
  content: "|";
  margin: 0 5px;
}
</style>