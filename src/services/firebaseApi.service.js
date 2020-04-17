import axios from "axios";

const firebaseApi = axios.create({
  baseURL: process.env.VUE_APP_DB_URL,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json"
  }
});

export default {
  getFeaturedProjects() {
    return firebaseApi.get("/projects.json?featured=true");
  },
  getAllProjects() {
    return firebaseApi.get("/projects.json");
  },
  getProject(id) {
    return firebaseApi.get("/projects/" + id);
  },
  postProject(project) {
    return firebaseApi.post("/projects.json", project);
  },
  getSkills() {
    return firebaseApi.get("/skills.json");
  }
};
