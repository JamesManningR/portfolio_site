import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

import VueSimpleMarkdown from "vue-simple-markdown";
import SVGPath from "@/components/general/SVGPath";
import ConfirmButton from "@/components/general/ConfirmButton";

import contentFile from "@/content.json";

Vue.config.productionTip = false;

// Import markdown component
Vue.use(VueSimpleMarkdown);

// Json Content file
Vue.prototype.$content = contentFile;

// Global components
Vue.component("svg-path", SVGPath);
Vue.component("confirm-button", ConfirmButton);

// Init
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
