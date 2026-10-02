<script setup>
import { useI18n } from 'vue-i18n';
import { useHead } from '@vueuse/head';
import { computed } from 'vue';

const { t, locale } = useI18n();

useHead({
    title: computed(() => `${t('nav_about')} | ${t('logo')}`),
    meta: [
        { name: 'description', content: computed(() => t('a_p1')) },
        { property: 'og:title', content: computed(() => t('h_title')) },
        { property: 'og:locale', content: locale },
    ],
});
</script>

<template>
    <section class="page" id="about">
        <div class="two">
            <div>
                <h1 data-i18n="a_title">{{ t('a_title') }}</h1>
                <p data-i18n="a_p1">
                    {{ t('a_p1') }}
                </p>
                <p class="muted" data-i18n="a_p2">
                    {{ t('a_p2') }}
                </p>
            </div>
            <div>
                <h2 data-i18n="a_tl">{{ t('a_tl') }}</h2>
                <ul class="tl">
                    <li>
                        <b data-i18n="t1">{{ t('t1') }}</b
                        ><span class="muted" data-i18n="td">{{ t('td') }}</span>
                    </li>
                    <li>
                        <b data-i18n="t2">{{ t('t2') }}</b
                        ><span class="muted" data-i18n="td">{{ t('td') }}</span>
                    </li>
                    <li>
                        <b data-i18n="t3">{{ t('t3') }}</b
                        ><span class="muted" data-i18n="td">{{ t('td') }}</span>
                    </li>
                </ul>
            </div>
        </div>
    </section>
</template>
