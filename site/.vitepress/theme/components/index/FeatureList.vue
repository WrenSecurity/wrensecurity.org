<script setup lang="ts">
defineProps({
  /**
   * Product logo image URL.
   */
  logo: { type: String, default: null },
});
</script>

<template>
  <section id="features">
    <ul :class="{ 'feature-item': $slots.featuresVertical }">
      <slot name="featuresVertical" />
    </ul>

    <div
      v-if="logo"
      id="product-img"
      class="feature-item"
    >
      <svg
        width="100%"
        height="100%"
      >
        <image
          :xlink:href="logo"
          width="100%"
          height="100%"
        />
      </svg>
    </div>
    <slot name="featuresHorizontal" />
  </section>
</template>

<style scoped>
#features {
  display: flex;
  margin-top: 28px;
}

.feature-item {
  flex: 0 50%;
  row-gap: 28px;
  display: flex;
  flex-direction: column;
}

@media (max-width: 768px) {
  #features .feature-item {
    flex: 0 100%;
  }
  #product-img {
    display: none;
  }
}
</style>
