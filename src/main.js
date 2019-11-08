import Vue from "vue";
import App from "./App.vue";
import "es6-promise/auto";
import vmodal from "vue-js-modal";
import vuetify from "./plugins/vuetify";
import firebase from "firebase";
import BootstrapVue from "bootstrap-vue";
import VueMeta from "vue-meta";
import store from "./store/index.js";
Vue.config.productionTip = false;
Vue.use(vuetify);
Vue.use(vmodal);
Vue.use(BootstrapVue);
Vue.use(VueMeta, {
  // optional pluginOptions
  refreshOnceOnNavigation: true
});

var config = require("../private/firebase");
firebase.initializeApp(config.firebaseKey);

new Vue({
  store,
  vuetify,
  render: h => h(App)
}).$mount("#app");
