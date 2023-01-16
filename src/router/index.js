import { createRouter, createWebHistory } from 'vue-router';
import HomeCom from '../components/HomeCom.vue';
import SearchCom from '../components/Search/SearchCom.vue';
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
      path: '/search',
      name: 'search',
      component: SearchCom,
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
