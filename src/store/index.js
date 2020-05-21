import Vue from "vue";
import Vuex from "vuex";

import * as project from "@/store/modules/project";
import * as auth from "@/store/modules/auth";
import * as notification from "@/store/modules/notification";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    project,
    auth,
    notification
  }
});
