import Vue from "vue";
import VueRouter from "vue-router";

// Import Routes
import projectRoutes from "./routes/projectRoutes";
import indexRoutes from "./routes/indexRoutes";
import blogRoutes from "./routes/blogRoutes";

Vue.use(VueRouter);

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [...projectRoutes, ...indexRoutes, ...blogRoutes]
});

export default router;
