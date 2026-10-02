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
    scrollBehavior(to, from, savedPosition) {
        // Browser back/forward button — restore previous scroll position
        if (savedPosition) {
            return savedPosition;
        }
        // Navigating to a hash, e.g. /about#team
        if (to.hash) {
            return { el: to.hash, behavior: 'smooth' };
        }
        // Normal forward navigation — scroll to top
        return { top: 0 };
    },
});

export default router;
