import { ref, computed } from 'vue';
import { defineStore } from 'pinia';

type NotificationType = 'success' | 'error';

const initialState = {
  isVisible: false,
  message: '',
  type: '',
  duration: 2500 // in milliseconds
};
const durationOffset = 300;

export const useNotificationsStore = defineStore('notifications', () => {
  // state
  const state = ref(initialState);

  // getters
  const notificationColor = computed(() => {
    if (state.value.type === 'success') return '#63b365';
    return '#f22e2e';
  });
  const iconName = computed(() => {
    if (state.value.type === 'success') return 'bi-check-circle-fill';
    return 'bi-exclamation-triangle-fill';
  });

  // methods
  function showNotification(message: string, type: NotificationType, duration: number = 2500) {
    state.value = {
      isVisible: true,
      message: message,
      type: type,
      duration: duration
    };

    // reset automatically after notification plays out
    setTimeout(() => (state.value = initialState), duration + durationOffset);
  }

  return {
    state,
    notificationColor,
    iconName,
    showNotification
  };
});
