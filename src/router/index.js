import { createRouter, createWebHistory } from "vue-router";
import HomeCom from "../components/HomeCom.vue";
import SearchCom from "../components/SearchCom.vue";
import MallCom from "../components/MallCom.vue";
import EventCom from "../components/EventCom.vue";
import MyPageCom from "../components/MyPageCom.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeCom,
    },
    {
      path: "/search",
      name: "search",
      component: SearchCom,
    },
    {
      path: "/mall",
      name: "mall",
      component: MallCom,
    },
    {
      path: "/event",
      name: "event",
      component: EventCom,
    },
    {
      path: "/mypage",
      name: "mypage",
      component: MyPageCom,
    },
  ],
});

export default router;
