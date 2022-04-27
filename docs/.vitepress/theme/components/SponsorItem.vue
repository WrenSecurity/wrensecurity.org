<script setup>
import { withBase } from 'vitepress'

const props = defineProps({
  logo: { type: String, required: true }
})
</script>

<template>
  <div class="sponsor-item">
    <div class="logo">
      <img v-bind:src="withBase(logo)" />
    </div>
    <div class="text">
      <slot></slot>
    </div>
  </div>
</template>

<style>
.sponsor-item {
  display: flex;
  justify-content: space-between;
  padding: 30px 20px;
}

.sponsor-item .logo {
  width: 30%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.sponsor-item .logo img {
  width: 100%;
  max-width: 250px;
}

.sponsor-item .text {
  width: 60%;
}
</style>