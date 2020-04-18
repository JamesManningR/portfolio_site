import FirebaseAuthService from "@/services/firebaseAuthApi.service.js";

export const namespaced = true;

export const state = {
  idToken: null,
  userId: null
};

export const mutations = {
  AUTH_USER(state, userData) {
    state.idToken = userData.token;
    state.userId = userData.userId;
  },
  UNAUTH_USER(state) {
    (state.idToken = null), (state.userId = null);
  }
};

export const actions = {
  signup({ commit }, authData) {
    return FirebaseAuthService.createUser(authData).then(res => {
      commit("AUTH_USER", {
        token: res.data.idToken,
        userId: res.data.localId
      });
      const now = new Date();
      const tokenExpiry = new Date(now.getTime() + res.data.expiresIn * 1000);
      localStorage.setItem("token", res.data.token);
      localStorage.setItem("tokenExpiry", tokenExpiry);
      localStorage.setItem("userId", res.data.localId);
    });
  },
  signin({ commit }, authData) {
    return FirebaseAuthService.logInUser(authData).then(res => {
      commit("AUTH_USER", {
        token: res.data.idToken,
        userId: res.data.localId
      });
      const now = new Date();
      const tokenExpiry = new Date(now.getTime() + res.data.expiresIn * 1000);
      localStorage.setItem("token", res.data.token);
      localStorage.setItem("tokenExpiry", tokenExpiry);
      localStorage.setItem("userId", res.data.localId);
    });
  },
  autoSignin({ commit }) {
    // Gets token from local storage, checks if still valid and sets state
    const token = localStorage.getItem("token");
    if (!token) {
      return;
    }
    const tokenExpiry = localStorage.getItem("tokenExpiry");
    const now = new Date();
    if (now < tokenExpiry) {
      return;
    }
    const userId = localStorage.getItem("userId");
    commit("AUTH_USER", { token, userId });
  },
  logout({ commit }) {
    commit("UNAUTH_USER");
    localStorage.removeItem("token");
    localStorage.removeItem("tokenExpiry");
    localStorage.removeItem("userId");
  }
};

export const getters = {
  isAuthenticated: state => {
    return state.idToken !== null;
  }
};
