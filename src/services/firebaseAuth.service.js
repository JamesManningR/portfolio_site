const firebase = require("firebase/app");
require("firebase/auth");

console.log(firebase.auth());

const FirebaseAuth = firebase.auth();

export default {
  createUser(authData) {
    return FirebaseAuth.createUserWithEmailAndPassword(
      authData.email,
      authData.password
    );
  },
  logInUser(authData) {
    return FirebaseAuth.signInWithEmailAndPassword(
      authData.email,
      authData.password
    );
  },
  logOutUser() {
    FirebaseAuth.signOut();
  }
};
