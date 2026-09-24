<script setup lang="ts">
import { onMounted } from 'vue';

const props = defineProps<{
  formUrl: string;
}>();

const LOADER_SRC = 'https://webforms.pipedrive.com/f/loader';

onMounted(() => {
  // Re-add the Pipedrive loader on every mount, otherwise it renders forms only on full page load.
  document.querySelectorAll('script[data-pipedrive-loader]').forEach((el) => el.remove());
  const script = document.createElement('script');
  script.src = LOADER_SRC;
  script.setAttribute('data-pipedrive-loader', '');
  document.body.appendChild(script);
});
</script>

<template>
  <div class="wren-pipedrive-form">
    <div class="pipedriveWebForms" :data-pd-webforms="props.formUrl"></div>
  </div>
</template>

<style scoped>
.wren-pipedrive-form {
  margin: 48px 0 32px;
  /* padding-top: 48px - mitigate increased padding-bottom by external iframe Pipedrive style */
  padding: 48px 32px 32px;
  border-radius: 24px;
  background-color: var(--vp-c-bg-soft);
}

</style>
