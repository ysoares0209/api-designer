<script setup lang="ts">
  import Typography from '../atoms/Typography.vue';
  import LoadingBar from '../atoms/LoadingBar.vue';
  import Snackbar from '../molecules/Snackbar.vue';
  import { useNotificationsStore } from '../../stores/notifications';

  const store = useNotificationsStore();

  function onButtonClick() {
    store.showNotification('User failed to be created. Try again later!', 'success', 3);
  }
</script>

<template>
  <button @click="onButtonClick">Toggle</button>
  <Snackbar :isVisible="store.state.isVisible" :duration="store.state.duration">
    <div class="NotificationSnackbar-contentWrapper">
      <v-icon :name="store.iconName" scale="1.5" :fill="store.notificationColor" />
      <Typography :text="store.state.message" />
    </div>
    <LoadingBar :duration="store.state.duration" :color="store.notificationColor" />
  </Snackbar>
</template>

<style scoped>
  .NotificationSnackbar-contentWrapper {
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }
</style>
