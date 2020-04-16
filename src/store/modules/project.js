import ProjectService from "@/services/projectsApi.service.js";

export const namespaces = true;

export const state = {
  projects: [],
  project: []
};

export const mutations = {
  ADD_PROJECT(state, project) {
    state.projects.push(project);
  },
  SET_PROJECTS(state, projects) {
    state.projects = projects;
  }
};

export const actions = {
  createProject({ commit }, project) {
    // Post project to project api and commit the change
    return ProjectService.postProject(project)
      .then(() => {
        commit("ADD_PROJECT", project);
      })
      .catch(err => {
        console.log(`Error: ${err}`);
        throw err;
      });
  },
  // Get all projects from the api
  fetchProjects({ commit }) {
    return ProjectService.getProjects()
      .then(res => {
        commit("SET_PROJECTS", res.data);
      })
      .catch(err => {
        console.log(`Error: ${err}`);
      });
  }
};
