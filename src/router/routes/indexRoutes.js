import store from "@/store";

export default [
  {
    path: "/",
    name: "index",
    title: "Home",
    component: () => import("@/views/Home.vue"),
    beforeEnter(routeTo, routeFrom, next) {
      if (Object.keys(store.state.project.projects).length <= 0) {
        store.dispatch("project/fetchProjects").then(next);
      } else {
        next();
      }
    }
  },
  {
    path: "/about",
    name: "about",
    component: () => import("@/views/About.vue")
  },
  {
    path: "/404",
    name: "404",
    component: () => import("@/views/404.vue")
  },
  {
    path: "*",
    redirect: "/404"
  }
];
