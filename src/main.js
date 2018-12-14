import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import ElementUI from "element-ui";

Vue.config.productionTip = false;

Vue.use(ElementUI);

new Vue({
  router,
  render: function(h) {
    return h(App);
  }
}).$mount("#app");