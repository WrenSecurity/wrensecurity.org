<script setup lang="ts">
withDefaults(
  defineProps<{
    variant?: 'soft' | 'outline' | 'outline-soft';
  }>(),
  {
    variant: 'soft'
  }
);
</script>

<template>
  <div class="wren-card" :class="`wren-card-${variant}`">
    <slot />
  </div>
</template>

<style scoped>
.wren-card {
  border-radius: 16px;
  padding: 32px;
}

.wren-card-soft {
  background-color: var(--vp-c-bg-soft);
}

.wren-card-outline {
  background-color: transparent;
  border: 2px solid var(--vp-c-brand-1);
}

.wren-card-outline-soft {
  background-color: transparent;
  border: 2px solid var(--wren-card-outline-soft);
}
</style>
