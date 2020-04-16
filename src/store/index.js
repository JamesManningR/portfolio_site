import Vue from "vue";
import Vuex from "vuex";

import * as project from "@/store/modules/project";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    project
  }
});
