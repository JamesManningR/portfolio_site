const axios = require("axios");

export default {
  async getFeaturedProjects() {
    return;
  },
  async getAllProjects() {
    axios
      .get(`${VUE_APP_NODE_API_URL}/projects`)
      .then(res => {
        console.log(res);
      })
      .catch(err => {
        console.log(err);
      });
  },
  async getProject(id) {
    axios
      .get(`${VUE_APP_NODE_API_URL}/projects/${id}`)
      .then(res => {
        console.log(res);
      })
      .catch(err => {
        console.log(err);
      });
  },
  async postProject(project) {
    axios
      .post(`${VUE_APP_NODE_API_URL}/projects`)
      .then(res => {
        console.log(res);
      })
      .catch(err => {
        console.log(err);
      });
  },
  async postMedia(mediaInfo) {
    return;
  },
  async getAllMedia() {
    return;
  },
  async getMediaById(id) {
    return;
  }
};
