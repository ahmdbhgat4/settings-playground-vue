<script setup>
import { useSettingsStore } from '@/stores/settings';
import { useI18n } from 'vue-i18n';

const { t } = useI18n();
const settings = useSettingsStore();
</script>

<template>
    <header>
        <div class="wrap bar">
            <RouterLink class="logo" :to="{ name: 'home-page' }" data-i18n="logo">{{ t('logo') }}</RouterLink>
            <nav aria-label="Main">
                <RouterLink :to="{ name: 'home-page' }" data-i18n="nav_home">{{ t('nav_home') }}</RouterLink>
                <RouterLink :to="{ name: 'about-page' }" data-i18n="nav_about">{{ t('nav_about') }}</RouterLink>
            </nav>
            <div class="tools">
                <div class="seg" role="group" aria-label="Language">
                    <button
                        v-for="langObj in settings.languages"
                        :key="langObj.id"
                        :data-lang="langObj.code"
                        :aria-pressed="settings.activeLanguage.id === langObj.id"
                        @click="settings.setActiveLanguage(langObj.id)"
                    >
                        {{ langObj.code }}
                    </button>
                </div>
                <div class="seg" role="group" aria-label="Theme">
                    <button
                        data-theme-set="light"
                        :aria-pressed="settings.theme === 'light'"
                        data-i18n="light"
                        @click="settings.setTheme('light')"
                    >
                        {{ t('light') }}
                    </button>
                    <button
                        data-theme-set="dark"
                        :aria-pressed="settings.theme === 'dark'"
                        data-i18n="dark"
                        @click="settings.setTheme('dark')"
                    >
                        {{ t('dark') }}
                    </button>
                </div>
            </div>
        </div>
    </header>
</template>
