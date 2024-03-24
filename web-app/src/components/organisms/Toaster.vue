<script setup lang="ts">
  import Typography from '../atoms/Typography.vue';
  import LoadingBar from '../atoms/LoadingBar.vue';
  import { useNotificationsStore } from '../../stores/notifications';

  const store = useNotificationsStore();

  function onButtonClick() {
    store.showNotification('User successfully created!', 'success');
  }
</script>

<template>
  <button @click="onButtonClick">Toggle</button>
  <div
    v-show="store.state.isVisible"
    class="Snackbar-wrapper"
    :class="{ show: store.state.isVisible }"
  >
    <div class="temp-wrapper">
      <v-icon name="bi-check-circle-fill" scale="1.5" fill="#63b365 " />
      <Typography :text="store.state.message" />
    </div>
    <LoadingBar />
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
</style>
