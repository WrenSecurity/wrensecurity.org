<script setup lang="ts">
import { withBase } from 'vitepress';
import Card from './Card.vue';

withDefaults(
  defineProps<{
    link?: string;
    linkText?: string;
    logo?: string;
    logoAlt?: string;
    variant?: 'soft' | 'outline' | 'outline-soft';
  }>(),
  {
    variant: 'soft'
  }
);
</script>

<template>
  <Card class="wren-feature-card" :class="{ 'wren-feature-card-with-logo': logo }" :variant="variant">
    <div class="wren-feature-card-content">
      <span v-if="$slots.label" class="wren-feature-card-label"><slot name="label" /></span>
      <h3><slot name="title" /></h3>
      <p><slot name="description" /></p>
      <a v-if="link" class="wren-feature-card-link" :href="withBase(link)">{{ linkText }}</a>
    </div>
    <div v-if="logo" class="wren-feature-card-logo">
      <img :src="withBase(logo)" :alt="logoAlt">
    </div>
  </Card>
</template>

<style scoped>
.wren-feature-card {
  display: flex;
  flex-direction: column;
}

.wren-feature-card-with-logo {
  flex-direction: row;
  gap: 16px;
}

.wren-feature-card-content {
  display: flex;
  flex-direction: column;
  flex: 1;
}

.wren-feature-card-label {
  color: var(--vp-c-brand-1);
  margin-bottom: 16px;
  font-weight: 600;
}

.wren-feature-card h3 {
  /* Cancel extra space above text from line-height. */
  margin: -5px 0 16px;
  font-size: 18px;
}

.wren-feature-card p {
  flex: 1;
  margin: 0;
}

.wren-feature-card-link {
  margin-top: 16px;
  color: var(--vp-c-brand-1);
  font-weight: 500;
}

.wren-feature-card-link::after {
  content: " ->";
}

.wren-feature-card-logo {
  align-self: center;
  width: 120px;
}

.wren-feature-card-logo img {
  height: 120px;
  margin: 0;
}

@media (max-width: 959px) {
  .wren-feature-card-logo {
    display: none;
  }
}
</style>
