import Vue from "vue";
import Vuex from "vuex";

import * as project from "@/store/modules/project";
import * as auth from "@/store/modules/auth";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    project,
    auth
  }
});
