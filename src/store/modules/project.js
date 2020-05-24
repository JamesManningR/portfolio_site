import db from "@/services/nodeApi.service.js";
import router from "@/router";

export const namespaced = true;

export const state = {
  projects: {},
  project: {}
};

export const mutations = {
  ADD_PROJECT(state, project) {
    state.project = { ...state.project, ...project };
  },
  SET_PROJECTS(state, projects) {
    state.projects = projects;
  },
  SET_PROJECT(state, project) {
    state.project = project;
  },
  UPDATE_PROJECT(state, project) {
    const projectIndex = state.projects.findIndex(
      item => item.id === project._id
    );
    state.projects[projectIndex] = project;
  },
  REMOVE_PROJECTS(state, ids) {
    const updatedProjects = state.projects.filter(
      item => !ids.includes(item._id)
    );
    state.projects = updatedProjects;
  }
};

// Post project to project api and commit the change in vuex
export const actions = {
  createProject({ commit, dispatch }, project) {
    return db
      .postProject(project)
      .then(project => {
        commit("ADD_PROJECT", project);
        router.push({ name: "project-show", params: { id: project._id } });
        dispatch(
          "notification/createNotification",
          {
            action: "Create Project",
            message: "Your project has been posted!",
            type: "success"
          },
          { root: true }
        );
      })
      .catch(err => {
        dispatch(
          "notification/createNotification",
          {
            action: "Create Project",
            message: err.message,
            type: "failure"
          },
          { root: true }
        );
      });
  },
  // Get all projects from the api
  fetchProjects({ commit, dispatch }) {
    return db
      .getAllProjects()
      .then(projects => {
        commit("SET_PROJECTS", projects);
        return projects;
      })
      .catch(err => {
        dispatch(
          "notification/createNotification",
          {
            action: "Get projects",
            message: err.message,
            type: "failure"
          },
          { root: true }
        );
      });
  },
  fetchProject({ commit, getters, dispatch }, id) {
    let project = getters.getProjectById(id);
    if (project) {
      commit("SET_PROJECT", project);
      return project;
    } else {
      return db
        .getProject(id)
        .then(project => {
          commit("SET_PROJECT", project);
        })
        .catch(err => {
          dispatch(
            "notification/createNotification",
            {
              action: "Get project",
              message: err.message,
              type: "failure"
            },
            { root: true }
          );
        });
    }
  },
  updateProject({ commit, dispatch }, project) {
    return db
      .updateProject(project)
      .then(project => {
        commit("UPDATE_PROJECT", project);
        dispatch(
          "notification/createNotification",
          {
            action: "Project Updated",
            message: "This project has been updated!",
            type: "success"
          },
          { root: true }
        );
      })
      .catch(err => {
        dispatch(
          "notification/createNotification",
          {
            action: "Update Project",
            message: err.message,
            type: "failure"
          },
          { root: true }
        );
      });
  },
  deleteProject({ commit, dispatch }, project) {
    return db
      .deleteProject(project._id)
      .then(project => {
        commit("REMOVE_PROJECTS", [project._id]);
        dispatch(
          "notification/createNotification",
          {
            action: "Deleted Project",
            message: "This project has been deleted",
            type: "caution"
          },
          { root: true }
        );
      })
      .catch(err => {
        dispatch(
          "notification/createNotification",
          {
            action: "Delete Project",
            message: err.message,
            type: "failure"
          },
          { root: true }
        );
      });
  }
};

export const getters = {
  getProjectById: state => id => {
    return state.projects[id];
  }
};
