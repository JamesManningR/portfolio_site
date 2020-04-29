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
  fetchProjects({ commit, dispatch }) {
    return FirebaseService.getAllProjects()
      .then(snapshot => {
        const projects = mapFirestoreResponse(snapshot);
        dispatch("fetchFeaturedImages", projects);
        commit("SET_PROJECTS", projects);
        return snapshot.data;
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
        .then(snapshot => {
          const project = snapshot.data();
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
      .then(snapshot => {
        const media = snapshot;
        commit("SET_PROJECT_MEDIA", media);
      })
      .catch(err => {
        console.log(err);
      });
  },
  fetchFeaturedImages({commit}, projects){
    return FirebaseService.getFeaturedImages(projects)
    .then(data => {
      const media = data;
      console.log(data)
      commit("SET_FEATURED", media);
    })
    .catch(err => {
      console.log(err);
    })
  }
};

export const getters = {
  getProjectById: state => id => {
    return state.projects[id];
  }
};
