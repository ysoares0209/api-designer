<script setup lang="ts">
  import Logo from '../../assets/Icons/LogoWithText.vue';
  import TextWithLink from '../molecules/TextWithLink.vue';
  defineProps(['text', 'linkText', 'linkUrl']);
</script>

<template>
  <header class="AuthPagesHeader-wrapper">
    <Logo />
    <TextWithLink :text="text" :linkText="linkText" :linkUrl="linkUrl" />
  </header>
</template>

<style scoped>
  .AuthPagesHeader-wrapper {
    display: flex;
    justify-content: space-between;
  }
</style>
