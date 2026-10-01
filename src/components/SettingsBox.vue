<script setup>
import { useSettingsStore } from '@/stores/settings';
import { computed } from 'vue';
import { useI18n } from 'vue-i18n';

const { t } = useI18n();
const settings = useSettingsStore();

const direction = computed(() => t(settings.activeLanguage?.dir));
</script>

<template>
    <aside class="state" aria-live="polite">
        <h3 data-i18n="st_title">{{ t('st_title') }}</h3>
        <dl>
            <dt data-i18n="st_theme">{{ t('st_theme') }}</dt>
            <dd id="v-theme">{{ t(settings.theme) }}</dd>
            <dt data-i18n="st_lang">{{ t('st_lang') }}</dt>
            <dd id="v-lang">{{ t('langname') }}</dd>
            <dt data-i18n="st_dir">{{ t('st_dir') }}</dt>
            <dd id="v-dir">{{ direction }}</dd>
        </dl>
    </aside>
</template>
