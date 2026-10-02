<script setup>
import { useI18n } from 'vue-i18n';
import { useHead } from '@vueuse/head';
import { computed } from 'vue';

const { t, locale } = useI18n();

useHead({
    title: computed(() => `404 | ${t('logo')}`),
    meta: [
        { name: 'description', content: computed(() => t('n_text')) },
        { property: 'og:title', content: computed(() => t('n_title')) },
        { property: 'og:locale', content: locale },
    ],
});
</script>

<template>
    <section class="page nf" id="nf">
        <p class="big" aria-hidden="true">404</p>
        <h1 data-i18n="n_title">{{ t('n_title') }}</h1>
        <p class="muted" data-i18n="n_text">
            {{ t('n_text') }}
        </p>
        <RouterLink class="btn" :to="{ name: 'home-page' }" data-i18n="n_cta">{{ t('n_cta') }}</RouterLink>
    </section>
</template>
