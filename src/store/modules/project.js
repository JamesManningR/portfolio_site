import FirebaseService from "@/services/firebaseApi.service.js";

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
  }
};

// Post project to project api and commit the change in vuex
export const actions = {
  createProject({ commit, rootState }, project) {
    // If there is no authentication token
    if (!rootState.auth.idToken) {
      // Return without posting making request
      return;
    }
    return FirebaseService.postProject(project, rootState.auth.idToken)
      .then(() => {
        commit("ADD_PROJECT", project);
      })
      .catch(err => {
        console.log(`Error: ${err}`);
        throw err;
      });
  },
  // Grab posts with featured tag
  fetchFeatured({ commit }) {
    return FirebaseService.getFeaturedProjects()
      .then(res => {
        commit("SET_PROJECTS", res.data);
        return res.data;
      })
      .catch(err => {
        console.log(`Error: ${err}`);
      });
  },
  // Get all projects from the api
  fetchProjects({ commit }) {
    return FirebaseService.getAllProjects()
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
      return FirebaseService.getProject(id)
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
    return state.projects[id];
  }
};
