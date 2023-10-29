import { createRouter, createWebHistory } from 'vue-router';
import MyHome from '../components/MyHome.vue';
import MyPhotos from '../components/MyPhotos.vue';
import MyContext from '../components/MyContext.vue';
import MyConclusion from '../components/MyConclusion.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: MyHome,
  },
  {
    path: '/photos',
    name: 'Photos',
    component: MyPhotos,
  },
  {
    path: '/context',
    name: 'Context',
    component: MyContext,
  },
  {
    path: '/conclusion',
    name: 'Conclusion',
    component: MyConclusion,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
