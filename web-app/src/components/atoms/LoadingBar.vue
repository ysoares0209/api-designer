<script setup lang="ts">
  defineProps({
    duration: { type: Number, default: 2.5 },
    color: { type: String, default: '#63b365' }
  });
</script>

<template>
  <div class="LoadingBar-wrapper" :style="{ '--color': color, '--duration': duration }">
    <div />
  </div>
</template>

<style scoped>
  .LoadingBar-wrapper {
    height: 4px;
    width: 100%;

    div {
      height: 100%;
      border-radius: 8px;
      animation: roundtime calc(var(--duration) * 1s) linear forwards;
      transform-origin: left center;
      background: linear-gradient(to bottom, var(--color), var(--color));
    }
  }

  @-webkit-keyframes roundtime {
    to {
      transform: scaleX(0);
    }
  }

  @keyframes roundtime {
    to {
      transform: scaleX(0);
    }
  }
</style>
