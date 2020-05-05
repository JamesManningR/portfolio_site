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
  },
  SET_PROJECT_MEDIA(state, images) {
    state.project.images = images;
  }
};

// Post project to project api and commit the change in vuex
export const actions = {
  createProject({ commit, rootState }, project) {
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
      .then(projects => {
        commit("SET_PROJECTS", projects);
        return projects;
      })
      .catch(err => {
        console.log(`Error: ${err}`);
      });
  },
  // Get all projects from the api
  fetchProjects({ commit }) {
    return FirebaseService.getAllProjects()
      .then(projects => {
        if (projects) {
          commit("SET_PROJECTS", projects);
        }
        return projects;
      })
      .catch(err => {
        console.log(`Error: ${err}`);
      });
  },
  fetchProject({ commit, dispatch, getters }, id) {
    let project = getters.getProjectById(id);
    if (project) {
      commit("SET_PROJECT", project);
      dispatch("fetchProjectMedia", project.images);
      return project;
    } else {
      return FirebaseService.getProject(id)
        .then(project => {
          commit("SET_PROJECT", project);
          dispatch("fetchProjectMedia", project.images);
        })
        .catch(err => {
          console.log(`Error: ${err}`);
        });
    }
  },
  fetchProjectMedia({ commit }, ids) {
    return FirebaseService.getDocuemntInCollectionById("media", ids)
      .then(media => {
        commit("SET_PROJECT_MEDIA", media);
      })
      .catch(err => {
        console.log(err);
      });
  }
};

export const getters = {
  getProjectById: state => id => {
    return state.projects[id];
  }
};
