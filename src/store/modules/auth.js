import FirebaseAuthService from "@/services/firebaseAuthApi.service.js";

export const namespaced = true;

export const state = {
  idToken: null,
  userId: null
}

export const mutations = {
  authUser (state, userData){
    state.idToken = userData.token
    state.userId = userData.userId
  }
}

export const actions = {
  signup({commit}, authData){
    return FirebaseAuthService.createUser(authData)
    .then((res)=> {
      console.log(res)
      commit('authUser', {token: res.data.idToken, userId: res.data.localId})
    })
  },
  login({commit}, authData){
    return FirebaseAuthService.logInUser(authData)
    .then((res)=> {
      commit('authUser', {token: res.data.idToken, userId: res.data.localId})

    })
  }
}

export const getters = {
}
