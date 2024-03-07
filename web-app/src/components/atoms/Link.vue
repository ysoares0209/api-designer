<script setup lang="ts">
defineProps(['text', 'link'])
</script>

<template>
  <a :href="link">{{ text }}</a>
</template>

<style>
a {
  font-size: 1rem;
  text-decoration: underline;
  color: #181626;
}

</style>