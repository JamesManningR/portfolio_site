const firebase = require("firebase/app");
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
    return firestoreApi.collection('projects').get()
  },
  getAllProjects() {
    return firestoreApi.collection('projects').get()
  },
  getProject(id) {
    return firestoreApi.collection('projects').doc(id).get()
  },
  postProject(project, authData) {
    console.log(project);
    console.log(authData);
    return
  },
  getSkills() {
    return firestoreApi.collection('skills').get()
  }
};
