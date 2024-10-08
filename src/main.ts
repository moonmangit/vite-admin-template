import "./style.css";
import { createApp } from "vue";
import { createRouter, createWebHistory } from "vue-router";
import App from "./App.vue";

const app = createApp(App);
const router = createRouter({
  routes: [
    {
      path: "/",
      name: "home",
      component: () => import("./pages/home/index.vue"),
    },
    {
      path: "/about",
      name: "about",
      component: () => import("./pages/about/index.vue"),
    },
    {
      path: "/login",
      name: "login",
      component: () => import("./pages/login/index.vue"),
    },
  ],
  history: createWebHistory(),
});

app.use(router).mount("#app");
