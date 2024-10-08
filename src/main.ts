import "./style.css";
import { createApp } from "vue";
import { createI18n } from "vue-i18n";
import { createRouter, createWebHistory } from "vue-router";

import App from "./App.vue";
import en from "./locales/en";
import th from "./locales/th";

const app = createApp(App);
const i18n = createI18n<[typeof en], "en" | "th">({
  locale: "en",
  availableLocales: ["en", "th"],
  fallbackLocale: "en",
  messages: {
    en,
    th,
  },
});
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

app.use(router).use(i18n).mount("#app");
