import Vue from "vue";
import VueRouter from "vue-router";
import store from "@/store";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "index",
    title: "Home",
    component: Home,
    beforeEnter(routeTo, routeFrom, next) {
      if (Object.keys(store.state.project.projects).length <= 0) {
        store.dispatch("project/fetchProjects").then(next);
      } else {
        next();
      }
    }
  },
  {
    path: "/projects",
    name: "projects",
    title: "Projects",
    component: () => import("../views/project/ProjectIndex.vue"),
    beforeEnter(routeTo, routeFrom, next) {
      // If the the are no projects loaded
      if (Object.keys(store.state.project.projects).length <= 0) {
        // Get the projects, then trigger next
        store.dispatch("project/fetchProjects").then(next);
      } else {
        next();
      }
    }
  },
  {
    path: "/projects/new",
    name: "project-new",
    props: { newProject: true },
    component: () => import("../views/project/ProjectEdit.vue")
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
    props: { newProject: false },
    beforeEnter(routeTo, routeFrom, next) {
      store.dispatch("project/fetchProject", routeTo.params.id).then(next);
    }
  },
  {
    path: "/knowledge",
    name: "knowledge",
    component: () => import("../views/knowledge/KnowledgeIndex.vue"),
    beforeEnter(routeTo, routeFrom, next) {
      // If the the are no projects loaded
      if (Object.keys(store.state.project.projects).length <= 0) {
        store.dispatch("project/fetchProjects").then(next);
      } else {
        next();
      }
    }
  },
  {
    path: "/blog",
    name: "blog",
    component: () => import("../views/blog/BlogIndex.vue")
  },
  {
    path: "/about",
    name: "about",
    component: () => import("../views/About.vue")
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
