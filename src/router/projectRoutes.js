import ProjectIndex from "./../views/project/index.vue";
import ProjectShow from "./../views/project/show.vue";


export default[
  {
    path: "/projects",
    name: "Projects",
    component: ProjectIndex
  },
  {
    path: "/projects/:id",
    name: 'project-show',
    component: ProjectShow
  }
]
