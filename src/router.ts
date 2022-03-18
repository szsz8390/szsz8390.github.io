import { createRouter, createWebHistory } from "vue-router";
import HomeView from "@/views/HomeView.vue";

export const views = {
  HomeView: {
    path: "/",
    name: "HomeView",
    title: "",
  },
  AboutView: {
    path: "/about",
    name: "AboutView",
    title: "About Me",
  },
  ExternalView: {
    path: "/external",
    name: "ExternalView",
    title: "External Links",
  },
  SnsAccountsView: {
    path: "/sns",
    name: "SnsAccountsView",
    title: "SNS Accounts"
  }
};

const routes = [
  {
    path: views.HomeView.path,
    name: views.HomeView.name,
    component: HomeView,
    meta: { title: views.HomeView.title },
  },
  {
    path: views.AboutView.path,
    name: views.AboutView.name,
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ "@/views/AboutView.vue"),
    meta: { title: views.AboutView.title },
  },
  {
    path: views.ExternalView.path,
    name: views.ExternalView.name,
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "external" */ "@/views/ExternalView.vue"),
    meta: { title: views.ExternalView.title },
  },
  {
    path: views.SnsAccountsView.path,
    name: views.SnsAccountsView.name,
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "sns" */ "@/views/SnsAccountsView.vue"),
    meta: { title: views.SnsAccountsView.title },
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

const DEFAULT_TITLE = "YUKI Suzu";
router.afterEach((to, _from) => {
  document.title = to.meta.title ? DEFAULT_TITLE + " - " + to.meta.title as string : DEFAULT_TITLE;
});
export default router;
