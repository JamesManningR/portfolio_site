import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import VueSimpleMarkdown from "vue-simple-markdown";
import SVGPath from "@/components/general/SVGPath";
import ConfirmButton from "@/components/general/ConfirmButton";
import contentFile from "@/content.json";

Vue.config.productionTip = false;

Vue.use(VueSimpleMarkdown);

Vue.prototype.$content = contentFile;

Vue.component("svg-path", SVGPath);
Vue.component("confirm-button", ConfirmButton);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
