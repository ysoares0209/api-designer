<script setup lang="ts">
  defineProps(['onClick']);
</script>

<template>
  <div @click="onClick" class="overlay"></div>
</template>

<style scoped>
  .overlay {
    position: fixed; /* Sit on top of the page content */
    display: block;
    width: 100%; /* Full width (cover the whole page) */
    height: 100%; /* Full height (cover the whole page) */
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.5); /* Black background with opacity */
    z-index: 1;
    cursor: pointer;
  }
</style>
