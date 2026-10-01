<script setup>
import { useI18n } from 'vue-i18n';

const { t } = useI18n();
</script>

<template>
    <footer>
        <div class="wrap">
            <span data-i18n="foot">{{ t('foot') }}</span>
            <RouterLink :to="{ path: '/404' }" data-i18n="prev404">{{ t('prev404') }}</RouterLink>
        </div>
    </footer>
</template>
