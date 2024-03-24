import { ref, computed } from 'vue';
import { defineStore } from 'pinia';

type NotificationType = 'success' | 'error';

const initialState = {
  isVisible: false,
  message: '',
  type: '',
  duration: 0
};
const durationOffset = 500;

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
  function showNotification(message: string, type: NotificationType, duration: number = 2.5) {
    state.value = {
      isVisible: true,
      message: message,
      type: type,
      duration: duration
    };

    // reset automatically after notification plays out
    // duration * 1000 to convert to milliseconds
    const timeout = duration * 1000 + durationOffset;
    setTimeout(() => (state.value = initialState), timeout);
  }

  return {
    state,
    notificationColor,
    iconName,
    showNotification
  };
});
