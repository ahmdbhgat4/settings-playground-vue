<script setup lang="ts">
import { onMounted } from 'vue';
import MainHeader from '@/components/MainHeader.vue';
import MainFooter from '@/components/MainFooter.vue';
import { useSettingsStore } from '@/stores/settings';

const settings = useSettingsStore();

onMounted(() => {
    settings.init();
});
</script>

<template>
    <MainHeader />

    <main>
        <div class="wrap">
            <RouterView />
        </div>
    </main>

    <MainFooter />
</template>
