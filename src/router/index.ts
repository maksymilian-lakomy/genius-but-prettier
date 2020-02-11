import Vue from 'vue';
import VueRouter from 'vue-router';
import AlbumPage from '../views/AlbumPage.vue';
import AlbumPageAbout from '../views/AlbumPage/AlbumPageAbout.vue';

import AlbumCover from '../views/AlbumCover.vue';


Vue.use(VueRouter);

const routes = [
    {
        path: '/',
        name: 'AlbumCover',
        component: AlbumCover,
    },
    {
        path: '/album',
        name: 'AlbumPage',
        component: AlbumPage,
        children: [
            {
                path: 'about',
                component: AlbumPageAbout,
            },
        ],
    },
];

const router = new VueRouter({
    routes,
});

export default router;
