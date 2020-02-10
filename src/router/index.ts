import Vue from 'vue';
import VueRouter from 'vue-router';
import AlbumPage from '../views/AlbumPage.vue';
import AlbumCover from '../views/AlbumCover.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'AlbumCover',
    component: AlbumCover,
  },
  {
    path: '/albumPage',
    name: 'AlbumPage',
    component: AlbumPage,
  },
];

const router = new VueRouter({
  routes,
});

export default router;
