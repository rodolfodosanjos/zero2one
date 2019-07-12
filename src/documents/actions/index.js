import { saveAs } from 'file-saver'
import { DOWNLOAD_DOCUMENT, GET_DOCUMENTS } from '@/documents/actions/documentActionTypes'
import { FAILED_REFRESH_DOCUMENTS, FINISHED_REFRESH_DOCUMENTS, STARTED_REFRESH_DOCUMENTS } from '@/documents/mutations/documentMutationTypes'
import documentsResource from '@/documents/resources/documentsResource'

export default {
  [GET_DOCUMENTS]: ({ commit }) =>
    new Promise((resolve, reject) => {
      commit(STARTED_REFRESH_DOCUMENTS)
      documentsResource.getAll()
        .then(items => {
          commit(FINISHED_REFRESH_DOCUMENTS, items)
          resolve(items)
        })
        .catch(error => {
          commit(FAILED_REFRESH_DOCUMENTS, error)
          reject(error)
        })
    })
  ,
  [DOWNLOAD_DOCUMENT]: (arg, document) =>
    saveAs(document.url, document.fileName)
}
