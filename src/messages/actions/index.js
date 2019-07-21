import { GET_MESSAGES } from '@/messages/actions/messageActionTypes'
import { FAILED_REFRESH_MESSAGES, FINISHED_REFRESH_MESSAGES, STARTED_REFRESH_MESSAGES } from '@/messages/mutations/messageMutationTypes'
import messagesResource from '@/messages/resources/messagesResource'

export default {
  [GET_MESSAGES]: ({ commit }, lessonId) =>
    new Promise((resolve, reject) => {
      commit(STARTED_REFRESH_MESSAGES)
      messagesResource.getFromLesson(lessonId)
        .then(messages => {
          commit(FINISHED_REFRESH_MESSAGES, messages)
          resolve(messages)
        })
        .catch(error => {
          commit(FAILED_REFRESH_MESSAGES, error)
          reject(error)
        })
    })
}
