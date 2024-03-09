<script setup lang="ts">
  import AuthPagesHeader from '../organisms/AuthPagesHeader.vue';
  defineProps(['text', 'linkText', 'linkUrl']);
</script>

<template>
  <main class="AuthPagesWrapper">
    <AuthPagesHeader :text="text" :linkText="linkText" :linkUrl="linkUrl" />
    <slot></slot>
  </main>
</template>

<style scoped>
  .AuthPagesWrapper {
    max-width: 1480px;
    height: 100vh;
    margin: 0 auto;
    padding: 4rem 2rem;
    font-weight: normal;
  }
</style>