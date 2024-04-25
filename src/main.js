import "flowbite";
import { createApp } from "vue";
import App from "./default/App.vue";
import store from "./store";
import "./index.css";
import router from "./router/router.js";

import "../node_modules/flowbite-vue/dist/index.css";
const app = createApp(App);
app.use(router);
app.use(store);
app.mount("#app");
