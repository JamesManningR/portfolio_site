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

const firestore = firebase.firestore();

export default {
  getFeaturedProjects() {
    return firestore.collection("projects").get();
  },
  getAllProjects() {
    return firestore.collection("projects").get();
  },
  getProject(id) {
    return firestore
      .collection("projects")
      .doc(id)
      .get();
  },
  postProject(project) {
    return firestore.collection("projects").add(project);
  },
  getSkills() {
    return firestore.collection("skills").get();
  },
  postSkills() {
    return firestore.collection("skills").add();
  },
  postMedia(mediaInfo) {
    return firestore.collection("media").add(mediaInfo);
  },
  getAllMedia() {
    return firestore.collection("media").get();
  },
  async getDocuemntInCollectionById(collection, ids) {
    const queries = ids.map(id =>
      firestore
        .collection(collection)
        .doc(id)
        .get()
    );
    const result = await Promise.all(queries);
    return result.map(res => res.data());
  }
};
