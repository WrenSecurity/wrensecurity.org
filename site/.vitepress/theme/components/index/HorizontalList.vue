<script setup>
defineProps({
  /**
   * Total number of items in the list.
   */
  itemsTotal: { type: Number, required: true }
});
</script>

<template>
  <section class="list">
    <slot :item-flex-basis="`calc((100% - ${itemsTotal - 1} * 28px) / ${itemsTotal})`" />
  </section>
</template>

<style scoped>
.list {
  display: flex;
  flex-wrap: wrap;
  max-width: 1152px;
  margin: 0px auto;
  row-gap: 28px;
}
</style>
