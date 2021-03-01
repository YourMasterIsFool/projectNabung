import Vue from "vue";
import App from "./src/App.vue";
import VueRouter from "vue-router";
import Home from "./src/views/Home";
import routers from "./src/routers";
Vue.use(VueRouter);

const router = new VueRouter({
    routes: routers,
});

const app = new Vue({
    render(h) {
        return h(App);
    },
    router,
}).$mount("#app");
