import Vue from "vue";
import VueRouter from "vue-router";
import Landing from "@/views/Landing.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Landing",
    component: Landing,
    meta: {
      title: "Eximia Eleven"
    }
  },
  {
    path: "/404",
    name: "notfound",
    alias: "*",
    component: () => import("@/views/NotFound.vue")
  },
  {
    path: "*",
    redirect: "/404"
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

router.afterEach(to => {
  Vue.nextTick(() => {
    document.title = to.meta.title || "Eximia Eleven";
  });
});

export default router;
