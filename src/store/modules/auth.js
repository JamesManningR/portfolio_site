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
  autoLogin({ commit }) {
    const authData = loadLocalAuth();
    if (!authData.token) {
      return;
    }
    if (!authData.expiry >= Date.now()) {
      return;
    }
    commit("SET_AUTH", authData);
    db.setToken(authData.token);
    return;
  },
  login({ commit, dispatch }, authData) {
    return db
      .login(authData)
      .then(data => {
        storeAuth(data);
        commit("SET_AUTH", data);
        dispatch(
          "notification/createNotification",
          {
            action: "Logged In",
            message: "Welcome back!",
            type: "success"
          },
          { root: true }
        );
      })
      .catch(err => {
        dispatch(
          "notification/createNotification",
          {
            action: "Login",
            message: err,
            type: "failure"
          },
          { root: true }
        );
      });
  },
  register({ commit, dispatch }, authData) {
    return db
      .register(authData)
      .then(data => {
        storeAuth(data);
        commit("SET_AUTH", data);
        dispatch(
          "notification/createNotification",
          {
            action: "User Registered",
            message: "Welcome to the blog system!",
            type: "success"
          },
          { root: true }
        );
      })
      .catch(err => {
        dispatch(
          "notification/createNotification",
          {
            action: "register",
            message: err,
            type: "failure"
          },
          { root: true }
        );
      });
  },
  logout({ commit }) {
    localStorage.removeItem("_token");
    localStorage.removeItem("_tokenExpiry");
    localStorage.removeItem("_username");
    localStorage.removeItem("_userId");
    commit("UNSET_AUTH");
    db.setToken(null);
  }
};

export const getters = {
  isAuthenticated: () => {
    return state.authData !== null;
  }
};
