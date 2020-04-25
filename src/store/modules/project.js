import FirebaseService from "@/services/firebaseApi.service.js";

export const namespaced = true;

export const state = {
  projects: {},
  project: {}
};

export function mapFirestoreResponse(res) {
  var resData = {};
  res.docs.forEach(doc => {
    resData[doc.id] = doc.data();
  });
  return resData;
}

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
      .then(snapshot => {
        const projects = mapFirestoreResponse(snapshot);
        commit("SET_PROJECTS", projects);
        return snapshot.data;
      })
      .catch(err => {
        console.log(`Error: ${err}`);
      });
  },
  // Get all projects from the api
  fetchProjects({ commit }) {
    return FirebaseService.getAllProjects()
      .then(snapshot => {
        const projects = mapFirestoreResponse(snapshot);
        commit("SET_PROJECTS", projects);
        return snapshot.data;
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
        .then(snapshot => {
          commit("SET_PROJECT", snapshot.data());
        })
        .catch(err => {
          console.log(`Error: ${err}`);
        });
    }
  }
  // ,
  // fetchMedia({commit}, ids){
  //   return Firebaseservice.resolveIds(ids).then((snapshot) => {
  //     const media = mapFistoreResponse(snapshot);
  //   }).catch(err => {
  //     console.log(err);
  //   })
  // }
};

export const getters = {
  getProjectById: state => id => {
    return state.projects[id];
  }
};
