<script setup lang="ts">
  import Typography from '../atoms/Typography.vue';
  import Link from '../atoms/Link.vue';

  defineProps(['text', 'linkText', 'linkUrl', 'isExternalLink']);
</script>

<template>
  <div class="TextWithLinkWrapper">
    <Typography :text="text" />
    <Link :link="linkUrl" :text="linkText" :isExternal="isExternalLink" />
  </div>
</template>

<style scoped>
  .TextWithLinkWrapper {
    display: flex;
    gap: 6px;
  }
</style>
