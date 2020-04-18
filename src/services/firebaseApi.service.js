const firebase = require("firebase");
require("firebase/firestore");

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: process.env.VUE_APP_API_KEY,
  authDomain: process.env.VUE_APP_AUTH_DOMAIN,
  databaseURL: process.env.VUE_APP_DB_URL,
  projectId: process.env.VUE_APP_PROJECT_ID,
  storageBucket: process.env.VUE_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.VUE_APP_SENDER_ID,
  appId: process.env.VUE_APP_APP_ID
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const firestoreApi = firebase.firestore();

export default {
  getFeaturedProjects() {
    return firestoreApi.get("/projects.json?featured=true");
  },
  getAllProjects() {
    return firestoreApi.get("/projects.json");
  },
  getProject(id) {
    return firestoreApi.get("/projects/" + id);
  },
  postProject(project, authData) {
    return firestoreApi.post(`/projects.json?auth=${authData}`, project);
  },
  getSkills() {
    return firestoreApi.get("/skills.json");
  }
};
