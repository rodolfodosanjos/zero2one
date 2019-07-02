import { STARTED_REFRESH_DOCUMENTS, FINISHED_REFRESH_DOCUMENTS, FAILED_REFRESH_DOCUMENTS } from '@/documents/mutations/documentMutationTypes'

export default {
  [STARTED_REFRESH_DOCUMENTS] (state, documents) {
    state.documents = {
      isLoading: true,
      items: []
    }
  },
  [FINISHED_REFRESH_DOCUMENTS] (state, documents) {
    state.documents = {
      isLoading: false,
      items: documents
    }
  },
  [FAILED_REFRESH_DOCUMENTS] (state, error) {
    state.documents = {
      isLoading: false,
      items: [],
      error
    }
  }
}