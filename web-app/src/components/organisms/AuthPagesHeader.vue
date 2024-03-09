<script setup lang="ts">
  import TextWithLink from '../molecules/TextWithLink.vue';
  defineProps(['text', 'linkText', 'linkUrl']);
</script>

<template>
  <header>
    <span>Logo placeholder</span>
    <TextWithLink :text="text" :linkText="linkText" :linkUrl="linkUrl" />
  </header>
</template>

<style scoped>
  header {
    display: flex;
    justify-content: space-between;
  }
</style>