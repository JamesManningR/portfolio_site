import db from "@/services/nodeApi.service.js";

export const namespaced = true;

function storeAuth(data) {
  localStorage.setItem("_token", data.token);
  localStorage.setItem("_tokenExpiry", data.tokenExpiry);
  localStorage.setItem("_username", data.username);
  localStorage.setItem("_userId", data.userId);
  return data;
}

function loadLocalAuth() {
  return {
    token: localStorage.getItem("_token"),
    expiry: localStorage.getItem("_tokenExpiry"),
    username: localStorage.getItem("_username"),
    userId: localStorage.getItem("_userId")
  };
}

export const state = {
  authData: null
};

export const mutations = {
  SET_AUTH(state, authData) {
    state.authData = authData;
  },
  UNSET_AUTH(state) {
    state.authData = null;
  }
};

// Post project to project api and commit the change in vuex
export const actions = {
  autoLogin() {
    const authData = loadLocalAuth();
    if (!authData.token) {
      return;
    }
  },
  login({ commit }, authData) {
    return db
      .login(authData)
      .then(data => {
        storeAuth(data);
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
        storeAuth(data);
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
