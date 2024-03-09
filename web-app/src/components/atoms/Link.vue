<script setup lang="ts">
  defineProps(['text', 'link']);
</script>

<template>
  <router-link class="link" :to="link">{{ text }}</router-link>
</template>

<style scoped>
  .link {
    color: #181626ff;
    font-size: 0.875rem;
    font-weight: 500;
    text-decoration: underline;
    line-height: 22px;
  }
</style>
