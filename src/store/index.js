import { createStore } from 'vuex';
import getters from './getters';
import collapse from './modules/collapse';
export default createStore({
  state: {},
  mutations: {},
  modules: {
    collapse,
  },
  getters,
});
