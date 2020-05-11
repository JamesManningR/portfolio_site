import db from "@/services/nodeApi.service.js";

export const namespaced = true;

export const state = {
  authToken: null,
  userName: null
};

export const mutations = {
  SET_AUTH(state, token, userName) {
    state.authToken = token;
    state.userName = userName;
  },
  UNSET_AUTH(state) {
    state.authToken = null;
    state.userName = null;
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

export const getters = {};
