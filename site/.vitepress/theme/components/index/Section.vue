<template>
  <div class="wrapper">
    <h2 class="title">
      <slot name="title" />
    </h2>
    <div class="content">
      <div class="intro">
        <p class="description">
          <slot name="description" />
        </p>
      </div>
    </div>
    <slot />
  </div>
</template>

<style scoped>
.wrapper {
  max-width: 1152px;
  margin: 0 auto 28px auto;
  border-top: 1px solid var(--vp-c-divider);
}

.title {
  margin: 28px 0;
  font-size: 32px;
  line-height: 32px;
  font-weight: 600;
}

.content {
  display: flex;
}

.description {
  font-size: 15px;
}
</style>
