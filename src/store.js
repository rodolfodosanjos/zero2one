import Vue from 'vue'
import Vuex from 'vuex'
import DocumentsStore from '@/documents/store'
import MessagesStore from '@/messages/store'
import UserStore from '@/user/store'
import { DOCUMENTS_MODULE } from '@/documents/store/documentsModules'
import { MESSAGES_MODULE } from '@/messages/store/messagesModules'
import { USERS_MODULE } from '@/user/store/usersModules'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    [DOCUMENTS_MODULE]: DocumentsStore,
    [MESSAGES_MODULE]: MessagesStore,
    [USERS_MODULE]: UserStore
  }
})
