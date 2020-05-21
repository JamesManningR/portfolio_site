export const namespaced = true;

export const state = {
  notifications: []
};

export const mutations = {
  ADD_NOTIFICATION(state, notification) {
    state.notification.push(notification);
  },
  REMOVE_NOTIFICATION(state, index) {
    state.notification.splice(index, 1);
  }
};

export const actions = {
  createNotification({ commit }, notification) {
    commit("ADD_NOTIFICATION", notification);
  },
  removeNotification({ commit }, index) {
    commit("REMOVE_NOTIFICATION", index);
  }
};

export const getters = {
  notificationCount(state) {
    return state.notifications.length();
  }
};
