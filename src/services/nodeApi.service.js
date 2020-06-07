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
        throw err.response;
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
        throw err.response;
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
        throw err.response;
      });
  },
  // Update ----------------------
  async updateProject(project) {
    const { title, body, link, images, featuredImage, color, skills, featured } = project;
    const updatedProject = {
      title,
      body,
      link,
      images,
      featuredImage,
      color,
      skills,
      featured
    };
    const id = project._id;
    return axios
      .put(`${API_URL}/projects/${id}`, updatedProject)
      .then(res => {
        return res.data;
      })
      .catch(err => {
        throw err.response;
      });
  },
  // Delete ----------------------
  async deleteProject(id) {
    return axios
      .delete(`${API_URL}/projects/${id}`)
      .then(res => {
        return res.data;
      })
      .catch(err => {
        throw err.response;
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
        throw err.response;
      });
  },
  async getAllMedia() {
    return axios
      .get(`${API_URL}/media`)
      .then(res => {
        return res.data;
      })
      .catch(err => {
        throw err.response;
      });
  },
  async getMediaById(id) {
    return axios
      .get(`${API_URL}/media/${id}`)
      .then(res => {
        return res.data;
      })
      .catch(err => {
        throw err.response;
      });
  },

  // Auth ============================
  // Register -----------------------
  async register(authData) {
    return axios
      .post(`${API_URL}/register`, authData)
      .then(res => {
        this.setToken(res.data.token);
        return res.data;
      })
      .catch(err => {
        throw err.response;
      });
  },

  // Login -----------------------
  async login(authData) {
    return axios
      .post(`${API_URL}/login`, authData)
      .then(res => {
        this.setToken(res.data.token);
        return res.data;
      })
      .catch(err => {
        throw err.response;
      });
  },

  setToken(token) {
    axios.defaults.headers.common["Authorization"] = token;
  }
};
