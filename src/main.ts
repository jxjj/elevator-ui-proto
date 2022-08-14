import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import HomePage from "./pages/HomePage.vue";
import ViewerPage from "./pages/ViewerPage.vue";
import { createRouter, createWebHistory } from "vue-router";

const routes = [
  { path: "/", component: HomePage },
  { path: "/viewer", component: ViewerPage },
];

const router = createRouter({
  history: createWebHistory("/elevator-ui-proto/"),
  routes,
});

createApp(App).use(router).mount("#app");
