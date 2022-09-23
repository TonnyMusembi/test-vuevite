import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import "./tailwind.css";
//import store from './store'

import Vue3EasyDataTable from "vue3-easy-data-table";
import "vue3-easy-data-table/dist/style.css";

import router from "./router/index";

createApp(App).use(router).mount("#app");
app.use(Vue3EasyDataTable);