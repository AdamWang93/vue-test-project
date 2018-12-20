import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";
import lodash from "lodash";

Vue.config.productionTip = false;
Vue.prototype.$lo = lodash;

Vue.use(ElementUI);

new Vue({
  router,
  render: function(h) {
    return h(App);
  }
}).$mount("#app");
