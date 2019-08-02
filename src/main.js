import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "bootstrap-css-only/css/bootstrap.min.css";
import "mdbvue/build/css/mdb.css";
import "@/firebase/";
import VeeValidate from "vee-validate";


Vue.config.productionTip = false;
Vue.use(VeeValidate);
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
