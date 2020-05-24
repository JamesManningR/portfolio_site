import "crypto";
export const namespaced = true;

export const state = {
  notifications: []
};

export const mutations = {
  ADD_NOTIFICATION(state, notification) {
    state.notifications.push(notification);
  },
  REMOVE_NOTIFICATION(state, id) {
    state.notifications = state.notifications.filter(
      notification => notification.id != id
    );
  }
};

export const actions = {
  // Create notification
  createNotification({ commit }, notification) {
    const notificationEntry = {
      ...notification,
      id: Date.now().toString()
    };
    commit("ADD_NOTIFICATION", notificationEntry);
    // Remove the notification after 4 secionds
    setTimeout(() => {
      commit("REMOVE_NOTIFICATION", notificationEntry.id);
    }, 4000);
  },
  removeNotification({ commit }, id) {
    commit("REMOVE_NOTIFICATION", id);
  }
};

export const getters = {};
