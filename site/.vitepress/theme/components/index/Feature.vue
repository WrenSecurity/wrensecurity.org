<template>
  <div class="wren-feature">
    <h3>
      <slot name="title" />
    </h3>
    <p>
      <slot name="description" />
    </p>
  </div>
</template>

<style scoped>
.wren-feature {
  background-color: var(--vp-c-bg-soft);
  padding: 24px;
  border-radius: 12px;
}
.wren-feature h3 {
  margin: 0;
}
.wren-feature p {
  margin-bottom: 0;
}
</style>
