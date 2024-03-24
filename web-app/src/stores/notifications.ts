import { ref } from 'vue';
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
  const state = ref(initialState);

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
    showNotification
  };
});
