import Vue from 'vue';
import VueRouter from 'vue-router';
import AlbumPage from '../views/AlbumPage.vue';
import AlbumPageAbout from '../views/AlbumPage/AlbumPageAbout.vue';
import AlbumPageSongs from '../views/AlbumPage/AlbumPageSongs.vue';

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
        component: AlbumPage,
        children: [
            {
                path: '',
                name: 'about',
                component: AlbumPageAbout,
            },
            {
                path: 'songs',
                name: 'songs',
                component: AlbumPageSongs,
            },
        ],
    },
];

const router = new VueRouter({
    routes,
});

export default router;
