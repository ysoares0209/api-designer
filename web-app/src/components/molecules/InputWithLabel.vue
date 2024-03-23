<script setup lang="ts">
  import Input from '../atoms/Input.vue';
  import InputLabel from '../atoms/InputLabel.vue';

  defineProps(['value', 'id', 'type', 'label', 'placeholder']);
  defineEmits(['update:value']);
</script>

<template>
  <div class="InputWithLabel-wrapper">
    <InputLabel :inputId="id" :text="label" />
    <Input
      :value="value"
      @update:value="$emit('update:value', $event)"
      :id="id"
      :type="type"
      :placeholder="placeholder"
    />
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
