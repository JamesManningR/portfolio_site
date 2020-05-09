import db from "@/services/nodeApi.service.js";

export const namespaced = true;

export const state = {
  projects: {},
  project: {}
};

export const mutations = {
  ADD_PROJECT(state, project) {
    state.project = { ...state.project, ...project };
  },
  SET_PROJECTS(state, projects) {
    state.projects = projects;
  },
  SET_PROJECT(state, project) {
    state.project = project;
  },
  SET_PROJECT_MEDIA(state, images) {
    state.project.images = images;
  }
};

// Post project to project api and commit the change in vuex
export const actions = {
  createProject({ commit, rootState }, project) {
    return db
      .postProject(project, rootState.auth.idToken)
      .then(project => {
        commit("ADD_PROJECT", project);
      })
      .catch(err => {
        console.log(`Error: ${err}`);
        throw err;
      });
  },
  // Get all projects from the api
  fetchProjects({ commit }) {
    return db
      .getAllProjects()
      .then(projects => {
        console.log(projects);
        commit("SET_PROJECTS", projects);
        return projects;
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
      return db
        .getProject(id)
        .then(project => {
          commit("SET_PROJECT", project);
        })
        .catch(err => {
          console.log(`Error: ${err}`);
        });
    }
  }
};

export const getters = {
  getProjectById: state => id => {
    return state.projects[id];
  }
};
