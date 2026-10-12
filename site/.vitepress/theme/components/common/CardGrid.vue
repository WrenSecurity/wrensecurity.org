<script setup lang="ts">
withDefaults(
  defineProps<{
    columns?: number;
  }>(),
  {
    columns: 3
  }
);
</script>

<template>
  <div class="wren-card-grid">
    <slot />
  </div>
</template>

<style scoped>
.wren-card-grid {
  display: grid;
  grid-template-columns: repeat(v-bind(columns), 1fr);
  gap: 16px;
  margin-top: 48px;
}

@media (max-width: 960px) {
  .wren-card-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 768px) {
  .wren-card-grid {
    margin-top: 32px;
  }
}

@media (max-width: 640px) {
  .wren-card-grid {
    grid-template-columns: 1fr;
  }
}
</style>
