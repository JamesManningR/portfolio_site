import store from "@/store";

export default [
  {
    path: "/blog",
    name: "blog",
    component: () => import("@/views/blog/BlogIndex.vue")
  },
  {
    path: "/blog/new",
    name: "blog-new",
    props: { newBlog: true },
    component: () => import("@/views/blog/BlogEdit.vue")
  },
  {
    path: "/blog/:id",
    name: "blog-show",
    component: () => import("@/views/blog/BlogShow.vue"),
    props: true,
    beforeEnter(routeTo, routeFrom, next) {
      store.dispatch("Blog/fetchBlog", routeTo.params.id).then(next);
    }
  },
  {
    path: "/blog/:id/edit",
    name: "blog-edit",
    component: () => import("@/views/blog/BlogEdit.vue"),
    props: { newBlog: false },
    beforeEnter(routeTo, routeFrom, next) {
      store.dispatch("Blog/fetchBlog", routeTo.params.id).then(next);
    }
  }
];
