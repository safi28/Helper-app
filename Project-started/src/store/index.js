import Vue from "vue";
import Vuex from "vuex";
import VueMaterial from "vue-material";
import "vue-material/dist/vue-material.min.css";
import Vuetify from "vuetify";
import Vuesax from "vuesax";
import VueNoty from "vuejs-noty";

Vue.use(VueMaterial);
Vue.use(Vuetify);
Vue.use(Vuesax);
Vue.use(VueNoty, {
  timeout: 1000,
  progressBar: true,
  layout: "topRight"
});

Vue.use(Vuex);

export default new Vuex.Store({});

export const store = Vue.observable({
  isNavOpen: false
});
export const mutations = {
  toggleNav() {
    store.isNavOpen = !store.isNavOpen;
  }
};
