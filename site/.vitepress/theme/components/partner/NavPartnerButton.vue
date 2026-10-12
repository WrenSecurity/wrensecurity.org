<script setup lang="ts">
import { VPLink } from 'vitepress/theme';

defineProps<{
  screenMenu?: boolean;
}>();
</script>

<template>
  <VPLink
    class="wren-nav-partner-button"
    :class="{ 'wren-nav-partner-button-screen': screenMenu }"
    href="/partners/talk-to-a-partner"
    no-icon
  >
    Talk to a Partner
  </VPLink>
</template>

<style scoped>
.wren-nav-partner-button {
  display: flex;
  align-items: center;
  height: 32px;
  margin: auto 12px;
  padding: 0 16px;
  border: 1px solid var(--vp-c-brand-1);
  border-radius: 16px;
  font-size: 14px;
  font-weight: 500;
  color: var(--vp-c-brand-1);
  transition: background-color 0.25s, color 0.25s;
}

.wren-nav-partner-button:hover {
  background-color: var(--vp-c-brand-1);
  color: var(--vp-c-white);
}

.wren-nav-partner-button-screen {
  margin: 12px 0 0;
  justify-content: center;
}
</style>
