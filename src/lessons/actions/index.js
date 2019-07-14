import { GET_LESSONS } from '@/lessons/actions/lessonsActionTypes'
import { FAILED_REFRESH_LESSONS, FINISHED_REFRESH_LESSONS, STARTED_REFRESH_LESSONS } from '@/lessons/mutations/lessonsMutationTypes'
import lessonsResource from '@/lessons/resources/lessonsResource'

export default {
  [GET_LESSONS]: ({ commit }) =>
    new Promise((resolve, reject) => {
      commit(STARTED_REFRESH_LESSONS)
      lessonsResource.getAll()
        .then(items => {
          commit(FINISHED_REFRESH_LESSONS, items)
          resolve(items)
        })
        .catch(error => {
          commit(FAILED_REFRESH_LESSONS, error)
          reject(error)
        })
    })
}
