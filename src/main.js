import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import VueSimpleMarkdown from "vue-simple-markdown";

Vue.config.productionTip = false;

Vue.use(VueSimpleMarkdown);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
