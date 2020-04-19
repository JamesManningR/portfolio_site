import firebaseAuth from "@/services/firebaseAuth.service";

export const namespaced = true;

export const state = {
  idToken: null,
  userId: null
};

export const mutations = {
  SET_USER(state, userData) {
    state.email = userData
  },
  UNSET_USER(state) {
    (state.idToken = null), (state.userId = null);
  }
};

export const actions = {
  signup({commit}, userData) {
    return firebaseAuth.createUser(userData).then( () =>{
      commit('SET_USER', userData.email)
    });
  },
  signin({commit}, userData) {
    commit("AUTH_USER", { userData });
    firebaseAuth.logInUser(userData);

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
    FirebaseAuth.logOutUser();
  }
};

export const getters = {
  isAuthenticated: () => {
    FirebaseAuth.isAuthenticated;
  }
};
