import db from "@/services/nodeApi.service.js";

export const namespaced = true;

export const state = {
  authToken: null,
  username: null
};

export const mutations = {
  SET_AUTH(state, authData) {
    console.log(authData);
    state.authToken = authData.token;
    state.username = authData.username;
    state.userId = authData.userId;
  },
  UNSET_AUTH(state) {
    state.authToken = null;
    state.username = null;
  }
};

// Post project to project api and commit the change in vuex
export const actions = {
  login({ commit }, authData) {
    return db
      .login(authData)
      .then(data => {
        commit("SET_AUTH", data);
      })
      .catch(err => {
        console.log(`Error: ${err}`);
        throw err;
      });
  },
  register({ commit }, authData) {
    return db
      .register(authData)
      .then(data => {
        commit("SET_AUTH", data);
      })
      .catch(err => {
        console.log(`Error: ${err}`);
        throw err;
      });
  },
  logout({ commit }) {
    commit("UNSET_AUTH");
  }
};

export const getters = {
  isAuthenticated: () => {
    return state.username !== null;
  }
};
