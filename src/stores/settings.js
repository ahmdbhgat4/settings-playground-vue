import { ref } from 'vue';
import { defineStore } from 'pinia';
import { useI18n } from 'vue-i18n';

export const useSettingsStore = defineStore(
    'settings',
    () => {
        const loading = ref(false);
        const theme = ref('');
        const languages = ref([]);
        const activeLanguage = ref(null);

        const { locale } = useI18n({ useScope: 'global' });

        function setTheme(value = '') {
            if (!value) {
                value = matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
            }
            theme.value = value;

            document.documentElement.dataset.theme = value;
        }
        async function fetchLanguages() {
            loading.value = true;
            try {
                const res = await fetch('/api/languages.json');
                languages.value = await res.json();
                if (!activeLanguage.value) {
                    setActiveLanguage(languages.value[0].id);
                }
            } catch (err) {
                console.log(err);
            } finally {
                loading.value = false;
            }
        }
        function setActiveLanguage(langId = '') {
            if (langId) {
                activeLanguage.value = languages.value.find(obj => obj.id === langId);
            }

            if (activeLanguage.value) {
                locale.value = activeLanguage.value.code;
                document.documentElement.lang = activeLanguage.value.code;
                document.documentElement.dir = activeLanguage.value.dir;
            }
        }
        function init() {
            if (!theme.value) {
                setTheme();
            }
            fetchLanguages();
        }

        return { theme, languages, activeLanguage, setTheme, fetchLanguages, setActiveLanguage, init };
    },
    {
        persist: {
            pick: ['theme', 'activeLanguage'],
            afterHydrate: ({ store }) => {
                document.documentElement.dataset.theme = store.theme;
                if (store.activeLanguage) {
                    store.setActiveLanguage();
                }
            },
        },
    },
);
