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
    });
  },
  login({ commit }, authData) {
    return FirebaseAuthService.logInUser(authData).then(res => {
      commit("AUTH_USER", {
        token: res.data.idToken,
        userId: res.data.localId
      });
    });
  },
  logout({ commit }) {
    commit("UNAUTH_USER");
  }
};

export const getters = {
  isAuthenticated: state => {
    return state.idToken !== null;
  }
};
