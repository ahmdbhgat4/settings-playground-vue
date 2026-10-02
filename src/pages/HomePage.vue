<script setup>
import { useI18n } from 'vue-i18n';
import { useHead } from '@vueuse/head';
import SettingsBox from '@/components/SettingsBox.vue';
import { computed } from 'vue';

const { t, locale } = useI18n();

useHead({
    title: computed(() => `${t('nav_home')} | ${t('logo')}`),
    meta: [
        { name: 'description', content: computed(() => t('h_intro')) },
        { property: 'og:title', content: computed(() => t('h_title')) },
        { property: 'og:locale', content: locale },
        { property: 'keywords', content: 'frontend, vue, reactivity' },
    ],
});
</script>

<template>
    <section class="page" id="home">
        <div class="hero">
            <div>
                <h1 data-i18n="h_title">{{ t('h_title') }}</h1>
                <p class="muted" data-i18n="h_intro">
                    {{ t('h_intro') }}
                </p>
                <RouterLink class="btn" :to="{ name: 'about-page' }" data-i18n="h_cta">{{ t('h_cta') }}</RouterLink>
            </div>
            <SettingsBox />
        </div>
        <div class="section">
            <h2 data-i18n="p_title">{{ t('p_title') }}</h2>
            <div class="rows">
                <div class="row">
                    <b data-i18n="p1">{{ t('p1') }}</b>
                    <span data-i18n="pd" class="muted">{{ t('pd') }}</span>
                    <span class="tag">Vue <span class="arrow">→</span></span>
                </div>
                <div class="row">
                    <b data-i18n="p2">{{ t('p2') }}</b>
                    <span data-i18n="pd" class="muted">{{ t('pd') }}</span>
                    <span class="tag">Vue <span class="arrow">→</span></span>
                </div>
                <div class="row">
                    <b data-i18n="p3">{{ t('p3') }}</b>
                    <span data-i18n="pd" class="muted">{{ t('pd') }}</span>
                    <span class="tag">Vue <span class="arrow">→</span></span>
                </div>
            </div>
        </div>
    </section>
</template>
