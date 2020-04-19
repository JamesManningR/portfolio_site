export const namespaced = true;

export const state = {
  user: null
};

export const mutations = {
  SET_USER(state, userData) {
    state.user = userData ? userData : null;
  }
};

export const actions = {
  fetchUser({ commit }, userData) {
    commit("SET_USER", userData);
  }
};

export const getters = {
  isAuthenticated: () => {
    return state.user !== null;
  }
};
