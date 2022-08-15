import HomePage from "./pages/HomePage.vue";
import MetaDataOnlyPage from "./pages/MetaDataOnlyPage.vue";
import ViewerPage from "./pages/ViewerPage.vue";

export default [
  { path: "/", component: HomePage },
  { path: "/viewer", component: ViewerPage },
  { path: "/meta-data-only", component: MetaDataOnlyPage },
];
