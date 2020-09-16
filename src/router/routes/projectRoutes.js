import store from "@/store";

export default [
  {
    path: "/projects",
    name: "projects",
    title: "Projects",
    component: () => import("@/views/project/ProjectIndex.vue"),
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
    component: () => import("@/views/project/ProjectEdit.vue")
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
  }
];
