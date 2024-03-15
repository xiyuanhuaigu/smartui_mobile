import { createRouter, createWebHashHistory } from "vue-router";

export default createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: "/login",
      component: () => import("@/pages/login/index.vue"),
    },
    {
      path: "/",
      redirect: "/login",
    },
    {
      path: "/home",
      component: () => import("@/pages/home/index.vue"),
    },
    {
      path: "/video",
      component: () => import("@/pages/video/index.vue"),
    },
    {
      path: "/waring",
      component: () => import("@/pages/waring/index.vue"),
    },
    {
      path: "/setting",
      component: () => import("@/pages/setting/index.vue"),
    },
  ],
});
