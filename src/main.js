import { createApp } from 'vue';
import { createHead } from '@vueuse/head';
import { createPinia } from 'pinia';
import { createI18n } from 'vue-i18n';

import App from '@/App.vue';
import router from '@/router';
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate';
import '@/index.css';
import { ar, en } from '@/locales';

const app = createApp(App);
const pinia = createPinia();
const i18n = createI18n({
    legacy: false, // you must set `false`, to use Composition API
    locale: 'en',
    fallbackLocale: 'en',
    messages: { ar, en },
});
pinia.use(piniaPluginPersistedstate);

app.use(pinia);
app.use(router);
app.use(i18n);
app.use(createHead());

app.mount('#app');
