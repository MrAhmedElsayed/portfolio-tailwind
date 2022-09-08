import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "./assets/tailwind.css";
import i18n from "./i18n";

const app = createApp(App).use(i18n);
app.use(store).use(router).mount("#app");
