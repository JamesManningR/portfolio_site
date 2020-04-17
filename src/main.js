import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "./scss/main.scss";
import SvgSprite from 'vue-svg-sprite';

Vue.use(SvgSprite, {
  url: '/assets/svg/symbol-defs.svg',
  size: "0 0 32 32"
});

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
