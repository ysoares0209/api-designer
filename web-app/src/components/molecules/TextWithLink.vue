<script setup lang="ts">
  import Typography from '../atoms/Typography.vue';
  import Link from '../atoms/Link.vue';

  defineProps(['text', 'linkText', 'linkUrl']);
</script>

<template>
  <div class="TextWithLinkWrapper">
    <Typography :text="text" />
    <Link :link="linkUrl" :text="linkText" />
  </div>
</template>

<style scoped>
  .TextWithLinkWrapper {
    display: flex;
    width: 14em;
    justify-content: space-around;
  }
</style>
