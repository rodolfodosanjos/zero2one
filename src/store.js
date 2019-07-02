import Vue from 'vue';
import Vuex from 'vuex';
import DocumentStore from '@/documents/store'

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    Documents: DocumentStore
  }
});
