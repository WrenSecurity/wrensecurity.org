<template>
  <ol
    class="wren-timeline"
    role="list"
  >
    <slot />
  </ol>
</template>

<style scoped>
.wren-timeline {
  display: flex;
  flex-direction: column;
  margin: 48px 0 0;
  padding: 0;
  list-style: none;
}

@media (max-width: 768px) {
  .wren-timeline {
    margin-top: 32px;
  }
}
</style>
