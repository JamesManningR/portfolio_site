import axios from "axios";

const mockApi = axios.create({
  baseURL: "http://localhost:3000",
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json"
  }
});

export default {
  getProjects() {
    return mockApi.get("/projects");
  },
  getProject(id) {
    return mockApi.get("/projects/" + id);
  },
  postProject(project) {
    return mockApi.post("/projects", project);
  },
  getSkills(){
    return mockApi.get("/skills");
  }
};
