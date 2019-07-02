import Vue from 'vue';
import Vuex from 'vuex';
import DocumentStore from '@/documents/store'
import { DOCUMENTS_MODULE } from '@/documents/store/documentsModules'

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    [DOCUMENTS_MODULE]: DocumentStore
  }
});
