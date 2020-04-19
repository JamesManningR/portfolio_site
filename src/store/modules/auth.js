import FirebaseAuth from "@/services/firebaseAuth.service";

export const namespaced = true;

export const state = {
  idToken: null,
  userId: null
};

export const mutations = {
  SET_USER(state, userData) {
    state.email = userData;
  },
  UNSET_USER(state) {
    state.email = "";
  }
};

export const actions = {
  signup({ commit }, userData) {
    return FirebaseAuth.createUser(userData).then(() => {
      commit("SET_USER", userData.email);
    });
  },
  fetchUser({ commit }, userData) {
    FirebaseAuth.logInUser(userData);
    commit("SET_USER", { userData });
  },
  signout() {
    FirebaseAuth.logOutUser();
  }
};

export const getters = {
  isAuthenticated: () => {
    return FirebaseAuth.currentUser != null;
  }
};
