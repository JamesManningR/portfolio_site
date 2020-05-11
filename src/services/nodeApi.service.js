const axios = require("axios");

const API_URL = process.env.VUE_APP_NODE_API_URL;

export default {
  // Projects ============================
  // Create ------------------------------
  async postProject(project) {
    return axios
      .post(`${API_URL}/projects`, project)
      .then(res => {
        return res.data;
      })
      .catch(err => {
        console.log(err);
        throw err;
      });
  },

  // Read ------------------------------
  // Multiple
  async getAllProjects() {
    return axios
      .get(`${API_URL}/projects`)
      .then(res => {
        return res.data;
      })
      .catch(err => {
        console.log(err);
        throw err;
      });
  },
  // Single
  async getProject(id) {
    return axios
      .get(`${API_URL}/projects/${id}`)
      .then(res => {
        return res.data;
      })
      .catch(err => {
        console.log(err);
        throw err;
      });
  },

  // Media ================================
  // Create ------------------------------
  async uploadMedia(file) {
    const formData = new FormData();
    formData.append("image", file);
    return axios
      .post(`${API_URL}/media`, formData)
      .then(res => {
        return res.data;
      })
      .catch(err => {
        console.log(err);
        throw err;
      });
  },
  async getAllMedia() {
    return axios
      .get(`${API_URL}/media`)
      .then(res => {
        return res.data;
      })
      .catch(err => {
        console.log(err);
        throw err;
      });
  },
  async getMediaById(id) {
    return axios
      .get(`${API_URL}/media/${id}`)
      .then(res => {
        return res.data;
      })
      .catch(err => {
        console.log(err);
        throw err;
      });
  },

  // Auth ============================
  // Register -----------------------
  async register(authData) {
    return axios
      .post(`${API_URL}/register`, authData)
      .then(res => {
        console.log(res.data);
        return res.data;
      })
      .catch(err => {
        console.log(err);
        throw err;
      });
  },

  // Login -----------------------
  async login(authData) {
    return axios
      .post(`${API_URL}/login`, authData)
      .then(res => {
        console.log(res.data);
        return res.data;
      })
      .catch(err => {
        console.log(err);
        throw err;
      });
  }
};
