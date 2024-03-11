<script setup lang="ts">
  import Overlay from '../atoms/Overlay.vue';

  const emit = defineEmits(['onOverlayClick']);

  function onOverlayClick() {
    emit('onOverlayClick');
  }
</script>

<template>
  <Overlay :onClick="onOverlayClick" />
  <div class="ModalWrapper">
    <slot></slot>
  </div>
</template>

<style scoped>
  .ModalWrapper {
    width: 35%;
    height: 45%;
    min-width: 35rem;
    min-height: 28rem;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: #ffffff; /* Black background with opacity */
    z-index: 2;
    border-radius: 12px;
  }
</style>
