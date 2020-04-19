import store from "@/store";
import router from "@/router";

const firebase = require("firebase/app");
const firebaseAuth = firebase.auth();

firebaseAuth.onAuthStateChanged(user => {
  store.dispatch("auth/fetchUser", user);
});

export default {
  createUser(authData) {
    return firebaseAuth.createUserWithEmailAndPassword(
      authData.email,
      authData.password
    );
  },
  logInUser(authData) {
    return firebaseAuth.signInWithEmailAndPassword(
      authData.email,
      authData.password
    );
  },
  logOutUser() {
    firebaseAuth.signOut();
    router.push("/")
  }
};