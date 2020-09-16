export default [
  {
    path: "/blog",
    name: "blog",
    component: () => import("@/views/blog/BlogIndex.vue")
  }
];
