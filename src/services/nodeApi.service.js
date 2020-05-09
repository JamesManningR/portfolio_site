const axios = require("axios");

const API_URL = process.env.VUE_APP_NODE_API_URL;

export default {
  // Projects ============================
  // Create ------------------------------
  async postProject(project) {
    axios
      .post(`${API_URL}/projects`, project)
      .then(res => {
        return res;
      })
      .catch(err => {
        console.log(err);
        throw err;
      });
  },

  // Read ------------------------------
  // Multiple
  async getAllProjects() {
    console.log(API_URL)
    console.log(`${API_URL}/projects`)
    axios
      .get(`${API_URL}/projects`)
      .then(res => {
        return res;
      })
      .catch(err => {
        console.log(err);
        throw err;
      });
  },
  // Single
  async getProject(id) {
    axios
      .get(`${API_URL}/projects/${id}`)
      .then(res => {
        return res;
      })
      .catch(err => {
        console.log(err);
        throw err;
      });
  },

  // Media ================================
  // Create ------------------------------
  async postMedia(mediaInfo) {
    axios
      .post(`${API_URL}/media`, mediaInfo)
      .then(res => {
        return res;
      })
      .catch(err => {
        console.log(err);
        throw err;
      });
  },
  async getAllMedia() {
    axios
      .get(`${API_URL}/media`)
      .then(res => {
        return res;
      })
      .catch(err => {
        console.log(err);
        throw err;
      });
  },
  async getMediaById(id) {
    axios
      .get(`${API_URL}/media/${id}`)
      .then(res => {
        return res;
      })
      .catch(err => {
        console.log(err);
        throw err;
      });
  }
};
