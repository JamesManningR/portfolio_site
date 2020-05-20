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
  createProject({ commit }, project) {
    return db
      .postProject(project)
      .then(project => {
        commit("ADD_PROJECT", project);
        router.push({ name: "project-show", params: { id: project._id } });
      })
      .catch(err => {
        console.log(`Error: ${err}`);
        throw err;
      });
  },
  // Get all projects from the api
  fetchProjects({ commit }) {
    return db
      .getAllProjects()
      .then(projects => {
        commit("SET_PROJECTS", projects);
        return projects;
      })
      .catch(err => {
        console.log(`Error: ${err}`);
      });
  },
  fetchProject({ commit, getters }, id) {
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
          console.log(`Error: ${err}`);
        });
    }
  },
  updateProject({ commit }, project) {
    return db
      .updateProject(project)
      .then(project => {
        commit("UPDATE_PROJECT", project);
      })
      .catch(err => {
        console.log(`Error: ${err}`);
        throw err;
      });
  },
  deleteProject({ commit }, project) {
    return db
      .deleteProject(project._id)
      .then(project => {
        commit("REMOVE_PROJECTS", [project._id]);
      })
      .catch(err => {
        console.log(err);
      });
  }
};

export const getters = {
  getProjectById: state => id => {
    return state.projects[id];
  }
};
