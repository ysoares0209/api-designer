import './assets/base.css';

import { createApp } from 'vue';
import { createPinia } from 'pinia';
import { OhVueIcon, addIcons } from 'oh-vue-icons';
import { BiExclamationTriangleFill, BiCheckCircleFill, BiXLg } from 'oh-vue-icons/icons';
import App from './App.vue';
import router from './router.ts';

addIcons(BiExclamationTriangleFill, BiCheckCircleFill, BiXLg);

const pinia = createPinia();
const app = createApp(App);

app.component('v-icon', OhVueIcon);

app.use(router);
app.use(pinia);
app.mount('#app');
