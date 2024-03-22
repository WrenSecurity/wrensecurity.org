<script setup>
defineProps({
  columns: { type: Number, required: true }
});
</script>

<template>
  <div class="wren-features">
    <slot />
  </div>
</template>

<style scoped>
.wren-features {
  display: grid;
  grid-template-columns: repeat(v-bind(columns), 1fr);
  gap: 16px;
  margin-top: 42px;
}

@media (max-width: 960px) {
  .wren-features {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 480px) {
  .wren-features {
    grid-template-columns: 1fr;
  }
}
</style>
