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
  autoLogin(){
    const idToken = localStorage.getItem('_token')
    if (!idToken) {
      return;
    }
    const username = localStorage.getItem('_username')
    // TODO: Add expiry check
  },
  login({ commit }, authData) {
    return db
      .login(authData)
      .then(data => {
        commit("SET_AUTH", data);
        localStorage.setItem('_token', data.authToken)
        localStorage.setItem('_username', data.username)
        // TODO: Add 'token expiry' logic
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
        localStorage.setItem('_token', data.authToken)
        localStorage.setItem('_username', data.username)
        // TODO: Add 'token expiry' logic
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
