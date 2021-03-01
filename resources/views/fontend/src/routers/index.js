import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Vue from "vue";
import About from "../views/About";

const routers = [
    {
        path: "/",
        component: Home
    },

    {
        path: "about",
        component: About
    }
];

export default routers;
