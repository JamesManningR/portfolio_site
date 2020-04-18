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
  signup({commit}, userData) {
    console.log(userData);
    commit("TEST", { userData });
    return FirebaseAuthService.createUser(userData);

  },
  signin({commit}, userData) {
    console.log(userData);
    commit("AUTH_USER", { userData });
    FirebaseAuthService.logInUser(userData);

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
  signout() {
    FirebaseAuthService.logOutUser();
  }
};

export const getters = {
  isAuthenticated: () => {
    FirebaseAuthService.isAuthenticated;
  }
};
