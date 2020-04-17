import axios from 'axios'

const firebaseAuthApi = axios.create({
  baseURL: `https://identitytoolkit.googleapis.com/v1/accounts`,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json"
  }
});

export default {
  createUser(authData) {
    return firebaseAuthApi.post(`:signUp?key=${process.env.VUE_APP_API_KEY}`, authData)
  },
  logInUser(authData){
    return firebaseAuthApi.post(`:signInWithPassword?key=${process.env.VUE_APP_API_KEY}`, authData)
  }
}