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

const db = firebase.firestore();
if (location.hostname === "localhost"){
  console.log('connecting to localhost')
  db.settings({
    host: "localhost:8080",
    ssl: false
  })
}

function mapFirestoreResponse(res) {
  var resData = {};
  res.forEach(doc => {
    resData[doc.id] = doc.data();
  });
  return resData;
}

export default {
  async getFeaturedProjects() {
    return db
      .collection("projects")
      .where("featured", "==", "true")
      .get()
      .then(res => {
        return mapFirestoreResponse(res);
      })
      .catch(err => {
        throw err;
      });
  },
  async getAllProjects() {
    return db
      .collection("projects")
      .get()
      .then(res => {
        return mapFirestoreResponse(res);
      })
      .catch(err => {
        throw err;
      });
  },
  async getProject(id) {
    return db.then
      .collection("projects")
      .doc(id)
      .get()
      .then(res => {
        return res.data;
      })
      .catch(err => {
        throw err;
      });
  },
  async postProject(project) {
    return db
      .collection("projects")
      .add(project)
      .then(res => {
        return res.data;
      })
      .catch(err => {
        throw err;
      });
  },
  async getSkills() {
    return db
      .collection("skills")
      .get()
      .then(res => {
        return res.data;
      })
      .catch(err => {
        throw err;
      });
  },
  async postSkills() {
    return db
      .collection("skills")
      .add()
      .then(res => {
        return res.data;
      })
      .catch(err => {
        throw err;
      });
  },
  async postMedia(mediaInfo) {
    return db
      .collection("media")
      .add(mediaInfo)
      .then(res => {
        return res.id;
      })
      .catch(err => {
        throw err;
      });
  },
  async getAllMedia() {
    return db
      .collection("media")
      .get()
      .then(res => {
        return mapFirestoreResponse(res);
      })
      .catch(err => {
        throw err;
      });
  },
  async getMediaById(id) {
    return db
      .collection("media")
      .doc(id)
      .get()
      .then(res => {
        return res.data;
      })
      .catch(err => {
        throw err;
      });
  },
  async getDocuemntInCollectionById(collection, ids) {
    const queries = ids.map(id =>
      db
        .collection(collection)
        .doc(id)
        .get()
    );
    const result = await Promise.all(queries);
    return result.map(res => res.data());
  }
};
