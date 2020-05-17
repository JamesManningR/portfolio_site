import Vue from "vue";
import VueRouter from "vue-router";
import store from "@/store";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "index",
    component: Home
  },
  {
    path: "/projects",
    name: "projects",
    component: () => import("../views/project/ProjectIndex.vue")
  },
  {
    path: "/projects/new",
    name: "project-new",
    component: () => import("../views/project/ProjectNew.vue")
  },
  {
    path: "/projects/:id",
    name: "project-show",
    component: () => import("@/views/project/ProjectShow.vue"),
    props: true,
    beforeEnter(routeTo, routeFrom, next) {
      store.dispatch("project/fetchProject", routeTo.params.id).then(next);
    }
  },
  {
    path: "/projects/:id/edit",
    name: "project-edit",
    component: () => import("@/views/project/ProjectEdit.vue"),
    props: true,
    beforeEnter(routeTo, routeFrom, next) {
      store.dispatch("project/fetchProject", routeTo.params.id).then(next);
    }
  },
  {
    path: "/skills",
    name: "skills",
    component: () => import("../views/skills/SkillsIndex.vue")
  },
  {
    path: "/blog",
    name: "blog",
    component: () => import("../views/blog/BlogIndex.vue")
  },
  {
    path: "/contact",
    name: "contact",
    component: () => import("../views/Contact.vue")
  },
  {
    path: "/register",
    name: "register",
    component: () => import("../views/auth/AuthRegister.vue")
  },
  {
    path: "/login",
    name: "login",
    component: () => import("../views/auth/AuthLogin.vue")
  },
  {
    path: "/404",
    name: "404",
    component: () => import("../views/404.vue")
  },
  {
    path: "*",
    redirect: "/404"
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
