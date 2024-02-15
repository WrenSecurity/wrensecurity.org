<script setup>
defineProps({
  /**
   * `flex-basis` style for this list item.
   */
  flexBasis: { type: String, required: true }
});
</script>

<template>
  <div class="item">
    <h3>
      <slot name="title" />
    </h3>
    <p>
      <slot name="text" />
    </p>
  </div>
</template>

<style scoped>
.item {
  flex-basis: v-bind(flexBasis);
}

@media (max-width: 768px) {
  .item {
    flex: 0 100%;
  }
}

h3 {
  font-weight: 600;
  line-height: 28px;
  font-size: 20px;
  margin-bottom: 0.5em;
}

p {
  font-size: 15px;
}
</style>
