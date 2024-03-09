<script setup lang="ts">
  import Input from '../atoms/Input.vue';
  import InputLabel from '../atoms/InputLabel.vue';

  defineProps(['id', 'type', 'label', 'placeholder']);
</script>

<template>
  <div class="InputWithLabel-wrapper">
    <InputLabel :inputId="id" :text="label" />
    <Input :id="id" :type="type" :placeholder="placeholder" />
  </div>
</template>

<style scoped>
  .InputWithLabel-wrapper {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    background-color: #f3f4f6;
    width: 22.5rem;
    height: 3.625rem;
    font-size: 0.875rem;
    padding: 0.5rem 0.75rem;
    border-radius: 6px;
  }
</style>
