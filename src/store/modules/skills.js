import BlogService from "@/services/firebaseApi.service.js";

export const namespaced = true;

export const state = {
  skills: []
}

export const mutations = {
  SET_SKILLS(state, skills) {
    state.skills = skills;
  }
}

export const actions = {
  fetchSkills({commit}){
    return BlogService.getSkills()
    .then(res => {
      commit("SET_SKILLS", res.data);
      return res.data;
    })
    .catch(err => {
      console.log(`Error: ${err}`);
    });
  }
}
