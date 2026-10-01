<script setup>
import { useI18n } from 'vue-i18n';

const { t } = useI18n();
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
