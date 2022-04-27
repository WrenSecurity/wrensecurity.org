<script setup>
import { withBase } from 'vitepress'

const props = defineProps({
  logo: { type: String, required: true }
})
</script>

<template>
  <div class="sponsor">
    <div class="sponsor-logo">
      <img :src="withBase(logo)">
    </div>
    <div class="sponsor-text">
      <slot />
    </div>
  </div>
</template>

<style scoped>
.sponsor {
  display: flex;
  justify-content: space-between;
  padding: 30px 20px;
}

.sponsor-logo {
  width: 30%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.sponsor-logo img {
  width: 100%;
  max-width: 250px;
}

.sponsor-text {
  width: 60%;
}
</style>