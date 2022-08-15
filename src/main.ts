import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import { createRouter, createWebHistory } from "vue-router";
import routes from "./routes";

const router = createRouter({
  history: createWebHistory("/elevator-ui-proto/"),
  routes,
});

createApp(App).use(router).mount("#app");
