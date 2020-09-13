export const namespaced = true;

export const state = {
  headerToggled: false
};

export const mutations = {
  TOGGLE_MENU(state) {
    state.headerToggled = !state.headerToggled;
  }
};

export const actions = {
  toggleMenu({ commit }) {
    commit("TOGGLE_MENU");
  }
};
