import ProjectService from "@/services/firebaseApi.service.js";

export const namespaced = true;

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
  },
  SET_PROJECT(state, project) {
    state.project = project;
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
        return res.data;
      })
      .catch(err => {
        console.log(`Error: ${err}`);
      });
  },
  fetchProject({ commit, getters }, id) {
    let project = getters.getProjectById(id);
    if (project) {
      commit("SET_PROJECT", project);
      return project;
    } else {
      return ProjectService.getProject(id)
        .then(res => {
          commit("SET_PROJECT", res.data);
        })
        .catch(err => {
          console.log(`Error: ${err}`);
        });
    }
  }
};

export const getters = {
  getProjectById: state => id => {
    return state.projects.find(project => project.id === id);
  }
};
