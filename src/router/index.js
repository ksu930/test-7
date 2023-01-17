import { createRouter, createWebHistory } from 'vue-router';
import HomeCom from '../components/HomeCom.vue';
import CareMallCom from '../components/CareMall/CareMallCom.vue';
import MallCom from '../components/Mall/MallCom.vue';
import EventCom from '../components/Event/EventCom.vue';
import MyPageCom from '../components/Mypage/MyPageCom.vue';
import RecentProdut from '../components/RecentProduct/RecentProduct.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeCom,
    },
    {
      path: '/caremall',
      name: 'caremall',
      component: () => import('../components/CareMall/CareMallCom.vue'),
    },
    {
      path: '/mall',
      name: 'mall',
      component: MallCom,
    },
    {
      path: '/event',
      name: 'event',
      component: EventCom,
    },
    {
      path: '/mypage',
      name: 'mypage',
      component: MyPageCom,
    },
    {
      path: '/recentproduct',
      name: 'recentproduct',
      component: RecentProdut,
    },
  ],
});

export default router;
