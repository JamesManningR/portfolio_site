const firebase = require("firebase/app");
require("firebase/firestore");
require("firebase/auth");

const firebaseAuth = firebase.auth();

export default {
  createUser(authData) {
    return firebaseAuth
      .createUserWithEmailAndPassword(authData.email, authData.password)
      .catch(err => {
        console.log(err);
        throw err;
      });
  },
  logInUser() {
    firebaseAuth.signOut();
  },
  logOutUser() {
    firebaseAuth.signOut();
  }
};
