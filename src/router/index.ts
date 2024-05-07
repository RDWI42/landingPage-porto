import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";

// Import komponen-komponen yang ingin Anda gunakan sebagai route
import Allpage from "../page/Allpage.vue";
import LoginPage from "../page/LoginPage.vue";
import RegisterPage from "../page/RegisterPage.vue";

const routes: Array<RouteRecordRaw> = [
    {
        path: "/landingPage-porto",
        name: "Home",
        component: Allpage,
    },
    {
        path: "/landingPage-porto/login",
        name: "Login",
        component: LoginPage,
    },
    {
        path: "/landingPage-porto/register",
        name: 'Register',
        component: RegisterPage
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
