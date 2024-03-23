<script setup lang="ts">
  import { ref } from 'vue';
  const showToaster = ref(false);

  async function toggle() {
    showToaster.value = true;
    setTimeout(() => (showToaster.value = false), 2800); // adds 300 ms for the fade out effect
  }
</script>

<template>
  <button @click="toggle">Toggle</button>
  <div v-show="showToaster" class="Snackbar-wrapper" :class="{ show: showToaster }">
    <div class="temp-wrapper">
      <v-icon name="bi-check-circle-fill" scale="1.5" fill="#63b365 " />
      <span class="Snackbar-text"> User successfully created! </span>
    </div>
    <div class="Snackbar-loading-bar" style="--duration: 2.5">
      <div />
    </div>
  </div>
</template>

<style scoped>
  .Snackbar-wrapper {
    visibility: hidden;
    position: fixed;
    bottom: 2rem;
    right: 3rem;
    min-width: 300px;
    min-height: 50px;
    max-width: 550px;
    display: flex;
    flex-direction: column;
    gap: 0.75rem;
    z-index: 1;
    background: white;
    padding: 0.75rem 1rem;
    border-radius: 6px;
    box-shadow: 1px 2px 6px #181626;
  }

  .show {
    visibility: visible;
    -webkit-animation:
      fadein 0.5s,
      fadeout 0.5s 2.5s;
    animation:
      fadein 0.5s,
      fadeout 0.5s 2.5s;
  }

  .temp-wrapper {
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }

  .Snackbar-text {
    text-align: left;
  }

  .Snackbar-loading-bar {
    height: 4px;
    width: 100%;

    div {
      height: 100%;
      border-radius: 8px;
      animation: roundtime calc(var(--duration) * 1s) linear forwards;
      transform-origin: left center;
      background: linear-gradient(to bottom, #63b365, #63b365);
    }
  }

  @-webkit-keyframes fadein {
    from {
      bottom: 0;
      opacity: 0;
    }
    to {
      bottom: 30px;
      opacity: 1;
    }
  }

  @keyframes fadein {
    from {
      bottom: 0;
      opacity: 0;
    }
    to {
      bottom: 30px;
      opacity: 1;
    }
  }

  @-webkit-keyframes fadeout {
    from {
      bottom: 30px;
      opacity: 1;
    }
    to {
      bottom: 0;
      opacity: 0;
    }
  }

  @keyframes fadeout {
    from {
      bottom: 30px;
      opacity: 1;
    }
    to {
      bottom: 0;
      opacity: 0;
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
