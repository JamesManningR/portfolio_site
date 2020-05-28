import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import VueSimpleMarkdown from "vue-simple-markdown";
import SVGPath from "@/components/general/SVGPath";
import AnimatedInput from "@/components/general/AnimatedInput";

Vue.config.productionTip = false;

Vue.use(VueSimpleMarkdown);

Vue.component("svg-path", SVGPath);
Vue.component("animated-input", AnimatedInput);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
