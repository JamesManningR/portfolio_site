const firebase = require("firebase/app");
require("firebase/firestore");
require("firebase/auth");

const firebaseAuth = firebase.auth();

export default {
  createUser(authData) {
    return firebaseAuth
    .createUserWithEmailAndPassword(authData.email, authData.password)
  },
  logInUser() {
    firebaseAuth.signOut();
  },
  logOutUser() {
    firebaseAuth.signOut();
  }
};
