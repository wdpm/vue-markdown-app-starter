import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import Home from "@/views/Home.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/playground",
    name: "Playground",
    component: () => import("@/views/Playground.vue")
  },
  {
    path: "/component",
    name: "Component",
    component: () => import("@/views/Component.vue"),
    children: [
      {
        path: "button",
        component: () => import(`@/docs/${"button"}.md`)
      },
      {
        path: "drawer",
        component: () => import(`@/docs/${"drawer"}.md`)
      },
      {
        path: "test",
        component: () => import(`@/docs/${"test"}.md`)
      }
    ]
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router;
