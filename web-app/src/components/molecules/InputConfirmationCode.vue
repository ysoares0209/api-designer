<script setup lang="ts">
  import Input from '../atoms/Input.vue';
</script>

<template>
  <Input id="InputConfirmationCode" type="number" placeholder="Type in your code" />
</template>

<style scoped>
  input {
    height: 3rem;
    width: 16rem;
    border: 1px solid #9095a1;
    border-radius: 6px;
    padding: 1rem;
    letter-spacing: 12px;
    text-align: center;
    font-size: 1.5rem;
    font-weight: 600;
  }

  input::placeholder {
    letter-spacing: normal;
    font-size: 0.875rem;
    font-weight: 400;
  }
</style>
