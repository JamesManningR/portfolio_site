import Vue from "vue";
import VueRouter from "vue-router";
import store from "@/store";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/projects",
    name: "Projects",
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
    component: () => import("../views/project/ProjectShow.vue"),
    props: true,
    beforeEnter(routeTo, routeFrom, next) {
      store
        .dispatch("project/fetchProject", routeTo.params.id)
        .then(project => {
          routeTo.params.project = project;
          next();
        });
    }
  },
  {
    path: "/skills",
    name: "Skills",
    component: () => import("../views/skills/SkillsIndex.vue")
  },
  {
    path: "/blog",
    name: "Blog",
    component: () => import("../views/blog/BlogIndex.vue")
  },
  {
    path: "/contact",
    name: "Contact",
    component: () => import("../views/Contact.vue")
  },
  {
    path: "/signup",
    name: "Signup",
    component: () => import("../views/auth/SignUp.vue")
  },
  {
    path: "/signin",
    name: "Signin",
    component: () => import("../views/auth/SignIn.vue")
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
