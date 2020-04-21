export const namespaced = true;

export const state = {
  uploads: []
};

export const mutations = {
  SET_UPLOADS(uploads) {
    state.uploads = { ...state.uploads, ...uploads };
  }
};
export const actions = {};
export const getters = {};
