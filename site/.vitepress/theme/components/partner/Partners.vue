<script setup lang="ts">
import { withBase } from 'vitepress';
import type { Partner } from '../../types/partner';

defineProps<{
  data: Partner[];
}>();
</script>

<template>
  <p class="partner-container">
    <a
      v-for="partner of data"
      :key="partner.name"
      :href="partner.url"
      target="_blank"
      class="partner-item"
    >
      <img
        :src="withBase('/partner/' + partner.logo)"
        :alt="partner.name"
      >
    </a>
  </p>
</template>

<style scoped>
.partner-container {
  display: flex;
  flex-wrap: wrap;
  row-gap: 10px;
}

@media (max-width: 480px) {
  .partner-container {
    justify-content: center;
  }
}

.partner-item {
  display: flex;
  align-items: center;
  max-width: 33%;
  min-width: 180px;
  padding: 20px;
  box-sizing: border-box;
}

.partner-item > img {
  max-height: 50px;
  margin: auto;
}
</style>
