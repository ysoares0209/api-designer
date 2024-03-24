<script setup lang="ts">
  import Typography from '../atoms/Typography.vue';
  import LoadingBar from '../atoms/LoadingBar.vue';
  import Snackbar from '../molecules/Snackbar.vue';
  import { useNotificationsStore } from '../../stores/notifications';

  const store = useNotificationsStore();

  function onButtonClick() {
    store.showNotification('User failed to be created. Try again later!', 'success');
  }
</script>

<template>
  <button @click="onButtonClick">Toggle</button>
  <Snackbar :isVisible="store.state.isVisible">
    <div class="temp-wrapper">
      <v-icon :name="store.iconName" scale="1.5" :fill="store.notificationColor" />
      <Typography :text="store.state.message" />
    </div>
    <LoadingBar :color="store.notificationColor" />
  </Snackbar>
</template>

<style scoped>
  .temp-wrapper {
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }

  .Snackbar-text {
    text-align: left;
  }
</style>
