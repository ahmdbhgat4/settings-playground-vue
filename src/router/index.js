import { createRouter, createWebHistory } from 'vue-router';
import AboutPage from '@/pages/AboutPage.vue';
import HomePage from '@/pages/HomePage.vue';
import NotFoundPage from '@/pages/NotFoundPage.vue';

const routes = [
    { path: '/', name: 'home-page', component: HomePage },
    { path: '/about', name: 'about-page', component: AboutPage },
    { path: '/:pathMatch(.*)*', name: 'not-found-page', component: NotFoundPage },
];

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes,
});

export default router;
