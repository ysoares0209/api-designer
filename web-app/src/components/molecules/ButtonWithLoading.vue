<script setup lang="ts">
  import type { PropType } from 'vue';
  import Button from '../atoms/Button.vue';
  import Spinner from '../atoms/Spinner.vue';

  defineProps({
    isLoading: { type: Boolean, default: false },
    text: { type: String, required: true },
    buttonType: { type: String as PropType<'button' | 'submit' | 'reset'>, default: 'button' },
    onClick: { type: Function as PropType<(event: MouseEvent) => void>, required: true }
  });
</script>

<template>
  <Button :text="text" :button-type="buttonType" :on-click="onClick">
    <Spinner v-show="isLoading" />
  </Button>
</template>

<style scoped>
  button {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1rem;
  }
</style>
