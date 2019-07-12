import { GET_USER } from '@/users/actions/userActionTypes'
import { FAILED_REFRESH_USER, FINISHED_REFRESH_USER, STARTED_REFRESH_USER } from '@/users/mutations/userMutationTypes'
import usersResource from '@/users/resources/usersResource'

export default {
  [GET_USER]: ({ commit }) =>
    new Promise((resolve, reject) => {
      commit(STARTED_REFRESH_USER)
      usersResource.get()
        .then(item => {
          commit(FINISHED_REFRESH_USER, item)
          resolve(item)
        })
        .catch(error => {
          commit(FAILED_REFRESH_USER, error)
          reject(error)
        })
    })
}
