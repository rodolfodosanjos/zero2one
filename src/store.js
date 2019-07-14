import Vue from 'vue'
import Vuex from 'vuex'
import DocumentsStore from '@/documents/store'
import LessonsStore from '@/lessons/store'
import MessagesStore from '@/messages/store'
import UserStore from '@/users/store'
import { DOCUMENTS_MODULE } from '@/documents/store/documentsModules'
import { LESSONS_MODULE } from '@/lessons/store/lessonsModules'
import { MESSAGES_MODULE } from '@/messages/store/messagesModules'
import { USERS_MODULE } from '@/users/store/usersModules'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    [DOCUMENTS_MODULE]: DocumentsStore,
    [LESSONS_MODULE]: LessonsStore,
    [MESSAGES_MODULE]: MessagesStore,
    [USERS_MODULE]: UserStore
  }
})
